import ApiClient from '@/api/client'
import { searchForValue } from '@/utils/filter'

import Pagination from '@/components/Pagination/Pagination.vue'

export default {
  name: 'DefaultShop',
  components: { Pagination },

  methods: {
    Api: () => ApiClient,
    Filter: (items, value) => searchForValue(items, value),

    getAllItems() {
      const that = this
      this.Api().get('/stocks').then(res => {
        if (res.error) {
          that.errorMessage = res.message
          return
        }

        that.items = res.data.items
        that.activeItems = res.data.items
      }).then(() => that.$forceUpdate())
    },
  },
}
