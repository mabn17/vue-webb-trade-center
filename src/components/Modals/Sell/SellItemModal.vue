<template>
  <sui-modal v-model="show" :closable="false">
    <sui-modal-header>Deposit</sui-modal-header>
    <sui-modal-content>
      <sui-modal-description>
        <sui-header>How much balance would you like to add?</sui-header>
        Hej
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button negative @click.native="close()">
        Cancel
      </sui-button>
      <sui-button positive @click.native="submit()">
        Sell
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
export default {
  name: 'SellModal',

  props: {
    callback: Function,
    update: Function,
    show: Boolean,
  },

  data() {
    return {
      itemsToSell: 0,
    }
  },

  methods: {
    close() { this.callback(); },

    // addPersonalAssets() {
    //   const that = this;
    //   this.Api().post('/user/update/assets', {newAmount: this.balance})
    //   .then(res => {
    //     if (res.error) {
    //       return;
    //     }

    //     that.update(true);
    //   });
    // },

    submit() {
      this.$validate().then(valid => {
        if (valid) {
          // this.addPersonalAssets();
          return true;
        }
      });
    },
  },
}
</script>
<style lang="less" src="@/assets/style/less/modal.less"></style>
