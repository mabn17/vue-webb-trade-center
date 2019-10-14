import DefaultStock from '@/components/shared/Stocks'
import { searchForValue } from '@/utils/filter'

import Pagination from '@/components/Pagination/Pagination.vue'

export default {
  name: 'DefaultShop',
  extends: DefaultStock,

  components: { Pagination },

  methods: {
    Filter: (items, value) => searchForValue(items, value),
  },
}
