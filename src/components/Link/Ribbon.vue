<template>
  <a v-if="message !== ''" is="sui-label" :color="color" ribbon>
    {{ message }}
  </a>
</template>

<script>
export default {
  name: 'ribbon',
  components: {},

  props: {
    message: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'red',
    },
  }
}
</script>