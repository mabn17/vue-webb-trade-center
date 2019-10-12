import ApiClient from '@/api/client'
import { SocketService } from '@/utils/sockets/index'
import LoadingComponent from '@/components/Loaders/Loading.vue'

export default {
  name: 'DefaultUpdate',
  components: { LoadingComponent },

  data() {
    return { isLoading: true }
  },

  methods: {
    Api: () => ApiClient,
    Socket: () => SocketService,
    finnishLoading() { this.isLoading = false },

    update() {
      const that = this

      this.Api().put('/stocks').then(res => {
        if (res.error) {
          that.errorMessage = res.message
          that.finnishLoading()
          return
        }

        that.Socket().emitStockChange()
        that.finnishLoading()
      });
    },
  },

  mounted() { this.update() },
}
