import history from '@/components/shared/Stocks'
import ErrorHandeler from '@/utils/errors'
import { searchForValue } from '@/utils/filter/index'
import Chart from '@/components/Charts/Chart.vue'
import HorizontalCard from '@/components/Cards/Horizontal/HorizontalCard.vue'
import SidePanel from '@/components/Side/SidePanel.vue'

export default {
  name: 'DefaultStock',
  extends: history,
  components: { Chart, HorizontalCard, SidePanel },

  data() {
    return {
      history: {}, errors: '', errorMessage: '',
      activeId: '', items: [], activeItem: {},
    }
  },

  methods: {
    ErrorService: () => ErrorHandeler,
    Search: (items, str) => searchForValue(items, str),

    handleParam() {
      const id = this.$route.params.id
      const newItem = this.Search(this.items, id);

      this.activeItem = newItem.length ? newItem[0] : {}
      this.activeId = id
    },
  },
}
