<template>
  <div class="pagination-div" v-if="items.length > 0">
    <b-container>
      <b-row>
        <b-col md="12" class="my-1">
          <b-pagination class="flex-wrap float-right"
            v-model="currentPage" :total-rows="totalRows"
            :per-page="perPage" @change="onPageChanged"
            prev-text="Prev" next-text="Next"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="6" md="4" class="my-2"
          :key="index"
          v-for="(item, index) in paginatedItems">
          <StockCard :item="item" :refreshCart="sendToCard" />
        </b-col>
      </b-row>
    </b-container>
  </div>
  <div v-else>
    <p>No matching stocks found</p>
  </div>
</template>

<script>
import DefaultPagination from './Pagination'

export default {
  name: 'pagination',
  extends: DefaultPagination,

  props: {
    updated: {
      type: Boolean,
      default: false,
    },

    perPage: {
      type: Number,
      default: 3,
    },

    items: {
      type: Array,
      default: () => [],
    },

    sendToCard: {
      type: Function,
      default: () => null,
    }
  },

  watch: {
    items: function() {
      this.update()
    },

    updated: function() {
      // this.currentPage = 1
      this.paginate(this.perPage, this.currentPage - 1);
    },
  },
}
</script>
<style lang="css">


.pagination > li.active > a {
  background: #41b883 !important;
  color: #fff !important;
  border: none;
}
</style>
