<template>
  <div :class="`col-12 col-sm-12 col-${col} mb-2`">
    <sui-table single-line :class="className">
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell class="my-auto" >Bought</sui-table-header-cell>
          <sui-table-header-cell class="my-auto" >Stock Name</sui-table-header-cell>
          <sui-table-header-cell class="my-auto" >Buy-in Price</sui-table-header-cell>
          <sui-table-header-cell class="my-auto" >Current Price</sui-table-header-cell>
          <sui-table-header-cell class="my-auto" >Quantity</sui-table-header-cell>
          <sui-table-header-cell class="my-auto" />
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <sui-table-row v-for="(item, index) in stocks" :key="index">
          <sui-table-cell>{{ item.buy_in_date }}</sui-table-cell>
          <sui-table-cell>{{ item.item_name }}</sui-table-cell>
          <sui-table-cell>{{ item.buy_in_price }}</sui-table-cell>
          <sui-table-cell>{{ item.price }}</sui-table-cell>
          <sui-table-cell>{{ item.amount }}</sui-table-cell>
          <sui-table-cell class="no-padding">
            <button class="btn btn-info lower-i" @click="callback(item)">
              Sell
            </button>
          </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
    </sui-table>
  </div>
</template>

<script>
export default {
  name: 'SingleLinePersonalStocks',
  components: {},

  props: {
    stocks: Array,
    col: String,

    className: {
      type: String,
      default: '',
    },
    columns: {
      type: Array,
      default: () => [
        'Bought', 'Stock Name',
        'Buy-in Price', 'Current Price',
        'Quantity',
      ],
    },
    callback: {
      type: Function,
      default: () => null,
    },
  },

  data() { return {}; },
}
</script>
<style>
  .lower-i {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    position: relative !important;
    top: -1px !important;
    background: #00b5ad;
  }
</style>
