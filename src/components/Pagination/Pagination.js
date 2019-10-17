import StockCard from '@/components/Cards/Stock/StockCard.vue'
const items = [];

export default {
  name: "DefaultPagination",
  components: { StockCard },

  data() {
    return {
      paginatedItems: items,
      totalRows: items.length,
      currentPage: 1,
    }
  },

  computed: {
    pageCount() {
      return Math.floor(this.totalRows / this.perPage)
    }
  },

  methods: {
    onPageChanged(page){ this.paginate(this.perPage, page - 1) },

    paginate(page_size, page_number) {
      let itemsToParse = this.items
      this.paginatedItems = itemsToParse.slice(page_number * page_size, (page_number + 1) * page_size);
    },

    update() {
      this.totalRows = this.items.length
      this.paginate(this.perPage, 0)
    }
  }
}
