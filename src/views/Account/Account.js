import SingleLinePersonalStocks from '@/components/Table/SingleLinePersonalStocks.vue';
import BalanceCard from '@/components/Cards/BalanceCard.vue';
import Chart from '@/components/Charts/Chart.vue';
import BalanceModal from '@/components/Modals/Balance/AddBalanceModal.vue';
import SellModal from '@/components/Modals/Sell/SellItemModal.vue';

import ApiClient from '@/api/client';
import TokenService from '@/api/TokenService.js';
import { SocketService } from '@/utils/sockets';

export default {
  name: 'DefaultAccount',

  components: {
    SingleLinePersonalStocks,
    BalanceCard, Chart,
    BalanceModal, SellModal,
  },

  methods: {
    Token: () => TokenService,
    Api: () => ApiClient,
    Socket: () => SocketService,
  },
}
