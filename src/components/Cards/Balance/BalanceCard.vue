<template>
  <div :class="`col-12 col-${col}`">
    <sui-card class="m-0 w-100">
      <sui-card-content>
        <sui-card-header>
          Balance
        </sui-card-header>
      </sui-card-content>
      <sui-card-content>
        <sui-header size="tiny">Locked Balance</sui-header>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                {{ information.assets
                  ? `${twoDecimals(information.assets)} kr.`
                  : 'Loading ...'
                }}
              </div>
            </div>
          </div>
        </div>
        <sui-divider section />
        <sui-header size="tiny">Stock Worth</sui-header>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                {{ sum(stocks) }} kr.
              </div>
            </div>
          </div>
        </div>
      </sui-card-content>
      <sui-card-content extra>
        <sui-button @click="callback()" color="teal">Add balance</sui-button>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
import { sumArr, round } from '@/utils/math'

export default {
  name: 'BalanceCard',
  components: {},

  props: {
    col: String,
    callback: {
      type: Function,
      default: () => undefined,
    },
    stocks: Array,
    information: Object,
  },

  methods: {
    sum(arr) { return sumArr(arr, 'amount'); },
    twoDecimals(val) { return round(val); },
  }
}
</script>
