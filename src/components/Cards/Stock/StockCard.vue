<template>
  <b-card
    :title="item.name"
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
          <span class="view">View</span>
        </b-col>
        <b-col cols="7" class="d-flex flex-row-reverse">
          <span class="add">Add to cart</span>
        </b-col>
      </b-row>
  </b-card>
</template>
<script>
export default {
  name: 'StockCard',

  props: {
    item: Object,

    color: {
      type: String,
      default: 'black',
    }
  },

  methods: {
    generateText() {
      const str = this.item.description

      return str.substring(0, 50)
    }
  }
}
</script>
<!--  -->
<style lang="css" src="@/assets/style/css/scoped/card.css" scoped></style>
