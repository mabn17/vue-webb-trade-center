<template lang="html">
  <div class="center">
    <h1 class="page-title bold">Our award-winning investing experience</h1>
    <p class="sub-title bold">
      Announcing $0 commissions on online stock, ETF and option trades, starting on Thursday,
      October 3. Get our best-in-class platforms and extensive branch network,
      now with commission-free trading.
    </p>
    <OrButtons
      textOne="Open New Account"
      textTwo="Learn More"
      className="mt-1"
      v-bind:callbackOne="register"
      v-bind:callbackTwo="about"
    />
    <div class="ui mt-4">
      <h1 is="sui-header">Welcome</h1>
      <sui-divider section />
    </div>
  </div>
</template>

<script>
import DefaultHome from './Home.js';

export default {
  name: 'home',
  extends: DefaultHome,
};
</script>


<style lang="less" src="@/assets/style/less/typography.less"></style>
<style lang="less" src="@/assets/style/less/center.less"></style>
<style lang="less" src="@/assets/style/less/margin.less"></style>
