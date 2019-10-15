import ShopService from '@/utils/shop'
export default {
  name: 'DefaultStockCard',

  data() {
    return {
      flashing: false,
    }
  },

  methods: {
    Shop: () => ShopService,
    generateText() {
      const str = this.item.description

      return str.substring(0, 50)
    },

    flash() {
      this.Shop().addOneShopItem(this.item)
      this.refreshCart()
      this.flashing = true
      setTimeout(() => this.flashing = false, 100)
    },
  }
}
