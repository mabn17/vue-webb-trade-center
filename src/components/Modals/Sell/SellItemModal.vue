<template>
  <sui-modal v-model="show" :closable="false">
    <sui-modal-header>Sell</sui-modal-header>
    <sui-modal-content>
      <sui-modal-description>
        <sui-header>
          You can sell up to {{ `${activeItem.amount} ${activeItem.item_name}` }} stocks.
        </sui-header>
        <span class="text-danger">{{ errorMessage }}</span>
        <br />
        <input 
          type="number" :defaultValue="0" v-model="itemsToSell"
        />
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
import DefaultSell from '@/components/Modals/Sell/SellItem'
export default {
  name: 'SellModal',
  extends: DefaultSell,

  props: {
    callback: Function,
    update: Function,
    show: Boolean,
    activeItem: {
      type: Object,
      default: () => {
        return { amount: 0, item_name: '', };
      },
    },
  },

  methods: {
    close() { this.callback(); },

    submit() {
      this.errorMessage = ''
      if (!this.validate()) {
        this.errorMessage = 'Wrong input'
        return
      }

      this.execSellPersonalStocks()
    },
  },
}
</script>
<style lang="less" src="@/assets/style/less/modal.less"></style>
