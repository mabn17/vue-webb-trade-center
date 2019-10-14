<template>
  <div class="mt-2">
    <h3>Other Stocks</h3>
      <p class="block-links">
        <Link v-for="item in notThisItem"
          :key="item.id"
          :value="item.name"
          :url="`/stocks/${item.name}`"
        />
      </p>
  </div>
</template>

<script>
import Link from '@/components/Link/Link.vue'
export default {
  name: 'SidePanel',
  components: { Link },

  props: {
    items: Array,
    name: String,
  },

  computed: {
    notThisItem: function() {
      return this.items.filter(val => val.name !== this.name)
    }
  }
}
</script>
<style scoped>
.block-links >>> a { display: block; }
.block-links >>> .right { float: none; }
</style>