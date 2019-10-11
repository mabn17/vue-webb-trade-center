<template>
  <div class="small">
    <line-chart
      :width="600" :height="200"
      :responsive="false" :chart-data="datacollection">
    </line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js';

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
  
    mounted () {
      this.fillData()
    },
  
    methods: {
      fillData () {
        this.datacollection = {
          labels: [1, 2, 5, 3],
          datasets: [
            {
              label: 'Price Changes',
              backgroundColor: '#f87979',
              data: [1, 2, 5, 3]
            }
          ]
        }
      }
    }
  }
</script>

<style>
  .small { margin: 150px auto; }
</style>