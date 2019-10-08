<template>
  <router-link :class="className" :to="`${url}`">
    {{ value }}
  </router-link>
</template>

<script>
export default {
  name: 'Link',
  components: {},
  props: {
    value: String,
    url: String,

    className: {
      type: String,
      default: 'right mt-1 signer'
    }
  }
};
</script>
