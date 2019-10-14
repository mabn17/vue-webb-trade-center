import DefaultStock from '@/components/shared/Stocks'
import { searchForValue } from '@/utils/filter'
import { SocketService } from '@/utils/sockets'

import Pagination from '@/components/Pagination/Pagination.vue'
import Cart from '@/components/Modals/Cart/Cart.vue'

export default {
  name: 'DefaultShop',
  extends: DefaultStock,

  components: {
    Pagination, Cart
  },

  methods: {
    Filter: (items, value) => searchForValue(items, value),
    Socket: () => SocketService,
  },
}
