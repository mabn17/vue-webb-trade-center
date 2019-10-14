import history from '@/components/shared/Stocks'
import SingleLinePersonalStocks from '@/components/Table/SingleLinePersonalStocks.vue';
import BalanceCard from '@/components/Cards/Balance/BalanceCard.vue';
import Chart from '@/components/Charts/Chart.vue';
import BalanceModal from '@/components/Modals/Balance/AddBalanceModal.vue';
import SellModal from '@/components/Modals/Sell/SellItemModal.vue';

import TokenService from '@/api/TokenService.js';
import { SocketService } from '@/utils/sockets';

export default {
  name: 'DefaultAccount',
  extends: history,

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
    Socket: () => SocketService,

    toggleModal() { this.showSellModal = !this.showSellModal; },
    showAddBalance() { this.showBalanceModal = !this.showBalanceModal; },
    setActiveItem(item) { this.activeItem = item; },

    showSellItemModal(item=null) {
      if (item) {
        this.setActiveItem(item);
      }

      this.toggleModal();
    },
  },
}
