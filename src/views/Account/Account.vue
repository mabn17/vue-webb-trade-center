<template>
<div class="ui">
  <h1 class="h4">
    Hello there, {{ decoded ? decoded.first_name : '' }}
  </h1>
  <sui-divider section />
  <div class="w-100 my-0 mx-auto">
    <BalanceModal :update="getPersonalInformation"
      v-bind:show="showBalanceModal"  v-bind:callback="showAddBalance" />
    <SellModal v-bind:activeItem="activeItem" :update="handleSold"
      v-bind:show="showSellModal" v-bind:callback="toggleModal" />
    <div>
      <h2 class="h3 mt-5">Overview</h2>
      {{ errors }}
      <sui-divider section />
      <div class="row">
        <SingleLinePersonalStocks :callback="showSellItemModal"
          col="xl-8" :stocks="stocks"
        />
        <BalanceCard col="xl-4" v-bind:information="personalInformation"
          v-bind:stocks="stocks" :callback="showAddBalance"
        />
      </div>
      <div class="m-n-5" v-for="(stock, index) in stocks" :key="index">
        <Chart :stock="history[stock['item_name']]" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import DefaultAccount from './Account.js';

export default {
  name: 'account',
  extends: DefaultAccount,

  methods: {
    handleUpdate() {
      this.errors = ''
      this.getPersonalStocks()
      this.getStockHistory()
    },

    handleSold() {
      this.getPersonalStocks()
      this.getPersonalInformation()
    },
  },

  mounted() {
    this.handleUpdate();
    this.getPersonalInformation();
    this.Socket().onStockChange(() => this.handleUpdate());
  },

  beforeDestroy() { this.Socket().closeConnection(); },
};
</script>
<style lang="less" src="@/assets/style/less/typography.less"></style>
<style lang="less" src="@/assets/style/less/margin.less"></style>
