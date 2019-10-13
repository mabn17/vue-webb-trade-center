<template>
  <div>
    <div class="w-100 mb-4">
      <label for="search">Search</label><br>
      <input name="search" class="underline-input w-75" type="text" v-model="searchString" />
    </div>
    <Pagination v-bind:items="activeItems" />
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
      searchString: '',
    }
  },

  watch: {
    searchString: function() {
      this.activeItems = this.Filter(this.items, this.searchString)
    }
  },

  mounted() { this.getAllItems() },
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
