<template>
  <div class="scroll-container small">
    <div class="scroll-box">
      <line-chart v-if="stock.length"
        :width="900" :height="300"
        :responsive="false" v-bind:chart-data="datacollection">
      </line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.js';
import { filterByObjProp } from '@/utils/filter';
import { calcDiff, round } from '@/utils/math';

export default {
  components: { LineChart },

  props: {
    stock: {
      type: [Array],
      default: () => [],
    }
  },

  data () {
    return {
      datacollection: null,
      colors: {
        down: '#f87979',
        up: '#33ab55',
      },
      activeColor: '',
    }
  },

  mounted () { this.fillData() },

  watch: { stock: function() { this.fillData() } },

  methods: {
    getPrice() { return this.stock[0] ? this.stock[0].price : null },
    getName() { return this.stock[0] ? this.stock[0].item_name : null },

    getTitleString() {
      const name = this.getName();

      if (!name) {
        return name;
      }

      const diff = round(calcDiff(
        this.stock[0].price,
        this.stock[0].old_price
      ));


      this.activeColor = diff >= 0 ? this.colors.up : this.colors.down;
      return `${name}: ${diff}%`;
    },

    fillData() {
      this.datacollection = {
        labels: [...filterByObjProp(this.stock), 'now'],
        datasets: [
          {
            label: this.getTitleString(),
            backgroundColor: this.activeColor,
            data: [...filterByObjProp(this.stock, 'old_price'), this.getPrice()]
          }
        ]
      }
    }
  },
}
</script>

<style>
canvas {
  width: 100%;
}

.scroll-container {
  padding: 20px;
  white-space: nowrap;
  overflow-x: auto;
}

.scroll-box { display: inline-block; }
</style>
