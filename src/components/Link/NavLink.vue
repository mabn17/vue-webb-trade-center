<template>
  <li v-on:click="callback()">
    <router-link :to="`${url}`" active-class="active" exact>
      <i :class="`${className} mt-n-2`" /> {{ value }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  components: {},
  props: {
    value: String,
    url: String,
    callback: Function,
    className: {
      type: String,
      default: '',
    },
  }
};
</script>
<style lang="less" src="../../assets/style/less/margin.less"></style>