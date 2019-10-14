import ApiClient from '@/api/client'
import DefaultStock from '@/components/shared/Stocks'
import { nestObjectArrayByKey } from '@/utils/filter'

export default {
  name: 'history',
  extends: DefaultStock,

  methods: {
    Api: () => ApiClient,
    NestByName: arr => nestObjectArrayByKey(arr),

    /**
     * Requires props:
     * {Object} history | Gets all history in one obj { Gold: [..], ..})
     * {Array?} activeItem | The spesific list from history [{}, ..]
     *
     * @param {String|Boolean} name To set an active item
     */
    getStockHistory(name=null) {
      const that = this;
      this.Api().get('/history/stocks').then(res => {
        if (res.error) {
          this.errors = res.message
          return
        }

        that.history = that.NestByName(res.data.data)
        if (name) this.setToActive(name)
      });
    },

    /**
     * Requires props:
     * {Array} stocks | Personal stocks [{name: 'Gold' ...}, ...])
     */
    getPersonalStocks() {
      this.Api().get('/stocks/user').then(res => {
        if (res.error) {
          this.errors = 'There was a problem loading your stocks.';
          return;
        }

        this.stocks = res.data.data;
      });
    },

    /**
     * Requires props:
     * {Object} personalInformation | updated user-information
     * @param {Boolean} close for Account vue to handle balance popup
     */
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

    /**
     * Requires props:
     * {String} errorMessage | selfexplained..
     * {Array} items | contains an array of all items
     * {Array?} activeItems |          v
     * @param {Boolean} isPaginate creates a dupplicate for pagination checks
     */
    getAllItems(isPaginate=true) {
      const that = this
      this.Api().get('/stocks').then(res => {
        if (res.error) {
          that.errorMessage = res.message
          return
        }

        that.items = res.data.items
        if (isPaginate) that.activeItems = res.data.items
      })
    },
  }
}
