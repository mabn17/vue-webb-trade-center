import ApiClient from '@/api/client'

export default {
  name: 'DefaultSell',
  components: {},

  data() {
    return {
      itemsToSell: 0,
      errorMessage: '',
    }
  },

  methods: {
    Api: () => ApiClient,

    validate() {
      let res = false
      const checkOne = !isNaN(this.itemsToSell)
      const checkTwo = this.itemsToSell > 0
      const checkThree = this.itemsToSell <= this.activeItem.amount

      if (checkOne && checkTwo && checkThree) {
        res = true
      }

      return res
    },

    execSellPersonalStocks() {
      const that = this

      this.Api().post('/user/stocks/sell', {
        amountToSell: this.itemsToSell,
        stockToSell: this.activeItem.item_name
      })
      .then(res => {
        if (res.error) {
          this.errorMessage = res.message
          return
        }
    
        // res.data
        that.update()
        this.callback()
      });
    },
  },
}
