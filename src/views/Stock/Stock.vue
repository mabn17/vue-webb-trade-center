<template>
<div>
  <div v-if="history[activeId]">
    <h1>{{ activeId }} - Overview</h1>
    <sui-divider section />
    <b-row>
      <b-col md="8"><Chart v-bind:stock="history[activeId]" /></b-col>
      <b-col md="4" >
        <HorizontalCard v-bind:current="newActiveItem">
          <i class="sign-out icon" id="rotate-me"></i><Link value="Back to Shop" url="/shop" />
        </HorizontalCard>
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
    '$route.params.id': function() {
      this.handleParam()
    },
    items: function() {
      this.handleParam()
    }
  },

  mounted() {
    const that = this
    this.activeId = this.$route.params.id
    this.getStockHistory(this.activeId)
    this.getAllItems(false)

    this.Socket().onStockChange(function() {
      that.getStockHistory(that.activeId, function() {
        that.handleParam()
      })
    })
  },
}
</script>
<style>
.small { padding: 0; }

#rotate-me {
  transform: rotate(180deg);
  margin-top: 9px;
}
</style>
