<template>
  <!-- <b-container>
    <b-row>
      <b-col cols="12" sm="4" class="my-1"
        :key="index"
        v-for="(item, index) in paginatedItems" 
          >
        <b-card         
          :bg-variant="item.variant || 'danger'"
          text-variant="white"
          :header="item.title || item.name"
          class="text-center"
          >
          <p class="card-text">
            {{item.body || 'lite text ...'}}
          </p>
        </b-card>  
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination @change="onPageChanged" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>
  </b-container> -->
  <Pagination v-bind:items="items" />
</template>

<script>
import ApiClient from '@/api/client'
import Pagination from '@/components/Pagination/Pagination.vue'

export default {
  name: 'shop',
  components: { Pagination },

  data() {
    return { items: [] }
  },

  methods: {
    getAllItems() {
      const that = this
      ApiClient.get('/stocks').then(res => {
        if (res.error) {
          that.errorMessage = res.message
          return
        }

        that.items = res.data.items
        // that.totalRows = res.data.items.length
        // that.paginate(this.perPage, 0)
        // this.$forceUpdate()
      }).then(() => that.$forceUpdate())
    },
  },

  mounted() { this.getAllItems() },
}
// import ApiClient from '@/api/client'
// const items = [];

// export default {
//   name: "MyBootstrapGrid",
//   data() {
//     return {
//       items: items,
//       paginatedItems: items,
//       perPage: 2,
//       totalRows: items.length,
//       currentPage: 1
//     };
//   },
//   computed: {
//     pageCount() {
//       let l = this.totalRows,
//         s = this.perPage;
//       return Math.floor(l / s);
//     }
//   },
//   mounted(){
//     this.getAllItems()
//   },
//   methods: {
//     paginate (page_size, page_number) {
//       let itemsToParse = this.items
//       this.paginatedItems = itemsToParse.slice(page_number * page_size, (page_number + 1) * page_size);
//     },
//     onPageChanged(page){
//       this.paginate(this.perPage, page - 1)
//     },

//     getAllItems() {
//       const that = this
//       ApiClient.get('/stocks').then(res => {
//         if (res.error) {
//           that.errorMessage = res.message
//           return
//         }

//         that.items = res.data.items
//         that.totalRows = res.data.items.length
//         that.paginate(this.perPage, 0)
//         this.$forceUpdate()
//       }).then(() => that.$forceUpdate())
//     },
//   }
// };
</script>
