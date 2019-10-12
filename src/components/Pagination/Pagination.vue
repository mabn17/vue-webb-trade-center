<template>
  <b-container>
    <b-row>
      <b-col cols="12" sm="4" class="my-1"
        :key="index"
        v-for="(item, index) in paginatedItems" 
          >
        <StockCard :item="item" />
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination @change="onPageChanged" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DefaultPagination from './Pagination'

export default {
  name: 'pagination',
  extends: DefaultPagination,

  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },

  watch: {
    items: function() {
      this.update()
    }
  }
}
</script>
