<template>
  <b-card
    :title="item.name"
    :sub-title="`${item.price} kr/st.`"
    :img-src="`/img/stocks/${item.picture}`"
    img-alt="item.name"
    img-top
    tag="article"
    class="mb-4 h-100 d-flex align-text-bottom"
  >
    <b-card-text class="flex-fill">
      {{generateText()}}
    </b-card-text>
    <b-row class="">
        <b-col cols="5" class="d-flex flex-row">
          <span class="view" @click="goToStockURL">View</span>
        </b-col>
        <b-col cols="7" class="d-flex flex-row-reverse">
          <div :class="{'flashing':flashing}" v-on:click="flash">
            <span class="add">Add to cart</span>
          </div>
        </b-col>
      </b-row>
  </b-card>
</template>
<script>
import DefaultStockCard from './StockCard'
export default {
  name: 'StockCard',
  extends: DefaultStockCard,

  props: {
    item: Object,

    color: {
      type: String,
      default: 'black',
    },

    update: {
      type: Function,
      default: () => null,
    },

    refreshCart: {
      type: Function,
      default: () => null,
    }
  },

  methods: {
    goToStockURL() {
      this.$router.push(`/stocks/${this.item.name}`)
    }
  }
}
</script>
<!--  -->
<style lang="css" src="@/assets/style/css/scoped/card.css" scoped></style>
