<template>
  <div>
    <Cart />
    <div class="w-100 my-3">
      <label for="search">Search</label><br>
      <input name="search" class="underline-input w-75" type="text" v-model="searchString" />
    </div>
    <Pagination v-bind:items="activeItems" v-bind:updated="updated" />
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
      searchString: '', updated: false
    }
  },

  watch: {
    searchString: function() {
      this.activeItems = this.Filter(this.items, this.searchString)
    }
  },

  mounted() {
    const that = this
    this.getAllItems()
    this.Socket().onStockChange(function() {
      that.getAllItems(true, function() {
        that.activeItems = that.Filter(that.items, that.searchString)
        that.updated = !that.updated
        // this.searchString = this.searchString
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
