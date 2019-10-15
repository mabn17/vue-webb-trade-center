<template>
  <div>
    <Cart
      v-bind:cartItems="cartItems"
      v-bind:update="setNewItemHasBeenAdded"
      v-bind:items="items"
      v-bind:personal="personalInformation"
      v-bind:message="message"
      :setMessage="setMessage"
    />
    <div class="w-100 my-3">
      <label for="search">Search</label><br>
      <input name="search" class="underline-input w-75" type="text" v-model="searchString" />
    </div>
    <Pagination
      v-bind:items="activeItems"
      v-bind:updated="updated"
      v-bind:sendToCard="setNewItemHasBeenAdded"/>
  </div>
</template>

<script>
import DefaultShop from './Shop'

export default {
  name: 'shop',
  extends: DefaultShop,

  data() {
    return {
      items: [], activeItems: [],
      searchString: '', updated: false,
      cartItems: [], newItemHasBeenAdded: false,
      personalInformation: {}, message: '',
    }
  },

  methods: {
    setNewItemHasBeenAdded() {
      this.newItemHasBeenAdded = !this.newItemHasBeenAdded
    },

    getCartItems() {
      this.cartItems = this.Shop().getShopAllItems()
    },

    setMessage(str) {
      this.message = str
    }
  },

  watch: {
    searchString: function() {
      this.activeItems = this.Filter(this.items, this.searchString)
    },

    newItemHasBeenAdded: function() {
      this.getCartItems()
    }
  },

  mounted() {
    const that = this
    this.getCartItems()
    this.getAllItems()
    this.getPersonalInformation()
    this.Socket().onStockChange(function() {
      that.getAllItems(true, function() {
        that.activeItems = that.Filter(that.items, that.searchString)
        that.updated = !that.updated
      })
    });
  },
}
</script>
<style>
.underline-input {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
}
.underline-input:focus { outline: none; }
</style>
