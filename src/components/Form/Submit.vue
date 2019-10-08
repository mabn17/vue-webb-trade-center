<template>
  <div class="actions">
    <sui-button
      type="button" :class="classNames"
      :color="color" @click="callback()"
      >
        {{ value }}
      </sui-button>
  </div>
</template>

<script>
export default {
  name: 'Submit',
  components: {},
  props: {
    callback: Function,
    value: String,
    color: {
      type: String,
      default: 'grey',
    },
    classNames: {
      type: String,
      default: 'fluid'
    }
  },
};
</script>

<style lang="less" src="../../assets/style/less/forms.less"></style>