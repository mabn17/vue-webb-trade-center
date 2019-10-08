<template lang="html">
  <div class="center">
    <div class="ui">
      <h1 is="sui-header">404 - Page not found</h1>
      <sui-divider section />
      <b>Location</b>: {{ url.substring(1) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'fof',
  components: {},
  data() {
    return {
      url: this.$route.path,
    }
  }
};
</script>

<style lang="less" src="../assets/style/less/center.less"></style>
