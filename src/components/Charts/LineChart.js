import { Line as Char, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  extends: Char,
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
