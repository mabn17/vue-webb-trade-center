<template>
<div class="ui">
  <h1 class="h4">
    Hello there, {{ decoded ? decoded.first_name : '' }}
  </h1>
  <sui-divider section />
  <div class="w-100 my-0 mx-auto">
    <BalanceModal :update="getPersonalInformation"
      v-bind:show="showBalanceModal"  v-bind:callback="showAddBalance" />
    <div>
      <h2 class="h3 mt-5">
        Overview
      </h2>
      {{ errors }}
      <sui-divider section />
      <div class="row">
        <SingleLinePersonalStocks
          col="xl-8" :stocks="stocks"
        />
        <BalanceCard col="xl-4" v-bind:information="personalInformation"
          v-bind:stocks="stocks" :callback="showAddBalance"
        />
      </div>
      <div class="m-n-5">
        <Chart />
      </div>
      <button type="button" @click="triggerSocket()">Tryck</button>
    </div>
  </div>
</div>
</template>

<script>
import DefaultAccount from './Account.js';

export default {
  name: 'account',
  extends: DefaultAccount,

  data() {
    return {
      decoded: this.Token().decodeUserToken(),
      stocks: [], personalInformation: {}, errors: '',
      showBalanceModal: false, showSellModal: false,
      activeItem: {},
    }
  },

  methods: {
    toggleModal() { this.showSellModal = !this.showSellModal; },
    showAddBalance() { this.showBalanceModal = !this.showBalanceModal; },
    setActiveItem(item) { this.activeItem = item; },

    showSellItemModal(item=null) {
      if (item) {
        this.setActiveItem(item);
        // console.log(item);
      }

      this.toggleModal();
    },

    getPersonalStocks() {
      this.Api().get('/stocks/user').then(res => {
        if (res.error) {
          this.errors = 'There was a problem loading your stocks.';
          return;
        }

        this.stocks = res.data.data;
      });
    },

    getPersonalInformation(close=false) {
      this.Api().get('/user/self').then(res => {
        if (res.error) {
          this.errors = res.message;
          return;
        }

        this.personalInformation = res.data.data;

        if (close) {
          this.showAddBalance();
        }
      });
    },

    handleUpdate() {
      this.errors = '';
      this.getPersonalStocks();
    },

    triggerSocket() {
      this.Socket().emitStocks('Något nytt');
    },
  },

  mounted() {
    this.handleUpdate();
    this.getPersonalInformation();
    this.Socket().onSocket(() => this.handleUpdate());
  },

  beforeDestroy() {
    this.Socket().closeConnection();
  },
};
</script>
<style lang="less" src="@/assets/style/less/typography.less"></style>
<style lang="less" src="@/assets/style/less/margin.less"></style>
