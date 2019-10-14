<template>
<div>
  <div v-if="activeItem">
    <b-row>
      <b-col md="8"><Chart v-bind:stock="activeItem" /></b-col>
      <b-col md="4" class="mt-4">
        <b-row>
          <a>Hej</a>
          <HorizontalCard :current="itemObj" />
        </b-row>
         <b-row>
           <div class="mt-2">
            <h3>Other Stocks</h3>
            <p class="block-links">
              <a>hs</a>
              <a>hs</a>
              <a>hs</a>
              <a>hs</a>
            </p>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </div>
  <div v-else>Could not find the wanted stock</div>
</div>
</template>
<script>
import DefaultStock from './Stock'

export default {
  name: 'stock',
  extends: DefaultStock,

  methods: {},

  watch: {
    items: function() {
      this.handleParam()
    }
  },

  mounted() {
    this.getStockHistory(this.$route.params.id)
    this.getAllItems(false)
  },
}
</script>
<style scoped>
.small { padding: 0; }

.block-links >>> a { display: block; }
</style>