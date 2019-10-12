<template>
  <div>
    <div :class="{errorClass}" >
      <label class="checkbox-label">
        <div class="content">
          <input
            class=""
            type="checkbox"
            :value="value"
            @input="$emit('input', $event.target.checked)"
          />
         <span class="span-label">{{ label }}</span><div :class="styles">{{ errorValue ? msg : '' }}</div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  components: {},
  props: {
    label: String,
    value: Boolean,
    errorValue: String,
    errorClass: Object,

    msg: { type: String, default: 'Must agree to the terms' },
    styles: { type: String, default: 'message error-message', },
  },
}
</script>

<style lang="less" src="@/assets/style/less/forms.less"></style>
