<template>
  <b-card         
    :text-variant="color"
    :header="item.name"
    class="text-center"
    >
    <p class="card-text">
      {{generateText()}}
    </p>
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

      return str.length > 50
        ? `${str.substring(0, 50)} ...`
        : str
    }
  }
}
</script>
