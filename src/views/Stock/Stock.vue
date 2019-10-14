<template>
<div>
  <div v-if="history[activeId]">
    <h1>{{ activeId }} - Overview</h1>
    <sui-divider section />
    <b-row>
      <b-col md="8"><Chart v-bind:stock="history[activeId]" /></b-col>
      <b-col md="4" >
        <b-row>
          <HorizontalCard :current="activeItem">
            <!-- <h2>hej</h2> -->
          </HorizontalCard>
        </b-row>
         <b-row>
           <SidePanel v-bind:name="activeId" v-bind:items="items" />
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
    $route: function() {
      this.activeId = this.$route.params.id
    },
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
<style>
.small { padding: 0; }
</style>
