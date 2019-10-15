<template>
<div>
  <b-button v-b-modal.modal-scrollable class="no-content-around" id="btn">
    <span>
      <i id="cart" class="cart icon mb-2">
        <span class="color-second">{{ cartItems.length }}</span>
      </i>
    </span>
  </b-button>
  <div>
  <b-modal
    no-close-on-backdrop
    scrollable
    id="modal-scrollable"
    title="Shopping Cart"
    okTitle="Checkout"
    @ok="handleOk"
  >
    <List
      v-bind:cartItems="cartItems"
      :update="update"
      v-bind:items="items"
      :personal="personal"
      :message="message"
      @cartChange="newTotal"
    />
  </b-modal>
</div>
</div>
</template>
<script>
import ShopService from '@/utils/shop'
import DefaultCart from './Cart'
export default {
  name: 'cart',
  extends: DefaultCart,

  data() {
    return {
      isRequesting: false,
      listValues: {
        totalCost: 0,
        assetsLeft: 0,
        formatedCart: {},
      },
    }
  },

  props: {
    update: {
      type: Function,
      default: () => null,
    },

    personal: {
      type: Object,
      default: () => {}
    },

    message: {
      type: String,
      default: '',
    },

    setMessage: {
      type: Function,
      default: (msg) => msg
    },

    items: {
      type: Array,
      default: () => [],
    },

    cartItems: {
      type: Array,
      defatul: () => [],
    }
  },

  methods: {
    handleMessage(str, yes=false) {
      this.isRequesting = false
      this.setMessage(str)

      if (yes) {
        this.listValues = { totalCost: 0, assetsLeft: 0, formatedCart: {} }
      }
    },

    handleOk(e) {
      e.preventDefault()

      if (!this.isRequesting) {
        this.isRequesting = true
        const { total, left, formatedCart } = this.listValues

        if (
          Object.entries(formatedCart).length === 0 &&
          formatedCart.constructor === Object
        ) return this.handleMessage('Cart seems to be empty, try picking up some of our stocks!')
        if (left < 0) return this.handleMessage('Cart is to heavy, you need to drop some items..')
        if (total <= 0) return this.handleMessage('Something went wrong, try reseting the cart.')

        for (const stock in formatedCart) {
          this.buyUserStocks({stockToBuy: stock, amountToBuy: formatedCart[stock].length })
        }

        ShopService.removeAllShopItems()

        this.handleMessage('Stocks sucsessfully added to your account', true)
        this.update()
      }
    },

    newTotal(total, left, formatedCart) {
      this.listValues = {
        total, left, formatedCart
      }

      this.setMessage('')
    }
  }
}
</script>

<style lang="css" src="@/assets/style/css/cart.css"></style>
