export default {
  name: 'DefaultStockCard',

  data() {
    return {
      flashing: false,
    }
  },

  methods: {
    generateText() {
      const str = this.item.description

      return str.substring(0, 50)
    },

    flash() {
      this.flashing = true;
      setTimeout(() => this.flashing = false, 100);
    },
  }
}
