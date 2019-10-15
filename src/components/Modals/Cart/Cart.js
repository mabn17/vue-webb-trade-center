import ShopService from '@/utils/shop'
import ApiClient from '@/api/client'
import List from '@/components/List/CartList/List.vue'

export default {
  name: 'DefaultCart',
  components: { List },

  methods: {
    Shop: () => ShopService,
    Api: () => ApiClient,

    buyUserStocks(data) {
      this.Api().post('/user/stocks/buy', data)
        .then(res => {
          if (res.error) {
            return res.message
          }

          return true
        })
    },
  }
}
