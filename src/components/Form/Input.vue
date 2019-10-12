<template>
  <sui-form-field>
    <div :class="{errorClass}" >
      <label>{{ text }}</label>
      <div class="content">
        <input :placeholder="text"
          :type="type"
          @input="$emit('input', $event.target.value)"
        >
      </div>
      <div :class="styles">{{ errorValue }}</div>
    </div>
    </sui-form-field>
</template>

<script>
export default {
  name: 'Input',
  components: {},
  props: {
    text: String,
    name: String,
    type: String,
    value: [String, Number],
    errorValue: String,
    errorClass: Object,
    styles: {
      type: String,
      default: 'message error-message',
    },
  },
}
</script>

<style lang="less" src="../../assets/style/less/forms.less"></style>
