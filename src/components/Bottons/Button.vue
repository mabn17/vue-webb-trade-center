<template>
  <button
    :class="className"
  >{{value}}</button>
</template>
<script>
export default {
  name: 'Button',
  components: {},
  props: {
    value: String,
    color: {
      type: String,
      default: '#4183c4',
    },
    className: {
      type: String,
      default: 'btn btn-info lower-i'
    },
    callback: {
      type: Function,
      default: () => null,
    },
  }
};
</script>

<style lang="css">
  .lower-i {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    position: relative !important;
    top: -1px !important;
    background: #00b5ad;
  }
</style>
