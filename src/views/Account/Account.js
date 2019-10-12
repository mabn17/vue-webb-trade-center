import SingleLinePersonalStocks from '@/components/Table/SingleLinePersonalStocks.vue';
import BalanceCard from '@/components/Cards/BalanceCard.vue';
import Chart from '@/components/Charts/Chart.vue';
import BalanceModal from '@/components/Modals/Balance/AddBalanceModal.vue';
import SellModal from '@/components/Modals/Sell/SellItemModal.vue';

import ApiClient from '@/api/client';
import TokenService from '@/api/TokenService.js';
import { SocketService } from '@/utils/sockets';
import { nestObjectArrayByKey } from '@/utils/filter';

export default {
  name: 'DefaultAccount',

  components: {
    SingleLinePersonalStocks,
    BalanceCard, Chart,
    BalanceModal, SellModal,
  },

  data() {
    return {
      decoded: this.Token().decodeUserToken(),
      stocks: [], personalInformation: {}, errors: '',
      showBalanceModal: false, showSellModal: false,
      activeItem: {}, history: {},
    };
  },

  methods: {
    Token: () => TokenService,
    Api: () => ApiClient,
    Socket: () => SocketService,
    NestByName: arr => nestObjectArrayByKey(arr),

    toggleModal() { this.showSellModal = !this.showSellModal; },
    showAddBalance() { this.showBalanceModal = !this.showBalanceModal; },
    setActiveItem(item) { this.activeItem = item; },

    showSellItemModal(item=null) {
      if (item) {
        this.setActiveItem(item);
      }

      this.toggleModal();
    },

    getPersonalStocks() {
      this.Api().get('/stocks/user').then(res => {
        if (res.error) {
          this.errors = 'There was a problem loading your stocks.';
          return;
        }

        this.stocks = res.data.data;
      });
    },

    getPersonalInformation(close=false) {
      const that = this;
      this.Api().get('/user/self').then(res => {
        if (res.error) {
          this.errors = res.message;
          return;
        }

        that.personalInformation = res.data.data;
        if (close) {
          that.showAddBalance();
        }
      });
    },

    getStockHistory() {
      const that = this;
      this.Api().get('/history/stocks').then(res => {
        if (res.error) {
          this.errors = res.message;
          return;
        }

        that.history = that.NestByName(res.data.data);
      });
    },
  },
}
