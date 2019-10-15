import ShopService from '@/utils/shop'
import { nestObjectArrayByKey } from '@/utils/filter'
import { updatedSumArr, round } from '@/utils/math'

export default {
  name: 'DefaultList',

  data() {
    return {
      className: 'text-danger'
    }
  },

  methods: {
    Shop: () => ShopService,
    Nest: (items) => nestObjectArrayByKey(items, 'name'),
    ToDecimal: (val) => round(val),
    UpdatedSum: (list, callback) => updatedSumArr(list, callback),

    getCurrPrice(id) {
      let price = 0;
      const that = this

      for (let i = 0; i < that.items.length; i++) {
        const element = that.items[i];
        
        if (element.id === id) {
          price = element.price;
          break;
        }
      }

      return price;
    },

    checkSum() {
      return this.ToDecimal(this.UpdatedSum(this.cartItems, this.getCurrPrice))
    },

    calculateNrOfOccursnses(name) {
      return this.cartItems.filter(item => item.name === name)
    },

    addItem(item) {
      this.Shop().addOneShopItem(item)
      this.update()
    },

    removeItem(item) {
      this.Shop().removeOrReturnpesificShopItem(item)
      this.update()
    },

    clearItems() {
      this.Shop().removeAllShopItems()
      this.$emit('cartChange', 0, 0, {})
      this.update()
    },
  },

  computed: {
    checkCurrentPrice() {
      return this.Nest(this.items)
    },

    personalAssets() {
      return this.ToDecimal(this.personal.assets)
    },

    stackedCardItems() {
      const that = this
      const result = [];
      const map = new Map();

      for (const item of that.cartItems) {
        if(!map.has(item.id)) {
          map.set(item.id, true);
          result.push(item);
        }
      }

      return result
    },

    calculateassetsLeft() {
      const assetsLeft = this.ToDecimal(this.personalAssets - this.checkSum())

      this.$emit('cartChange', this.checkSum(), assetsLeft, this.Nest(this.cartItems, 'name'))
      this.className = assetsLeft >= 0 ? 'text-success' : 'text-danger'
      return assetsLeft
    },
  }
}
