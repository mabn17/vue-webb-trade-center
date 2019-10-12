<template>
  <div is="sui-button-group" v-bind:class="className">
    <sui-button
      class="lower-index"
      v-bind:color="colorOne"
      v-bind:content="textOne"
      @click="callbackOne()"
    />
    <sui-button-or />
    <sui-button
      v-bind:color="colorTwo"
      v-bind:content="textTwo"
      @click="callbackTwo()"
    />
  </div>
</template>
<script>
export default {
  name: 'OrButtons',
  components: {},
  props: {
    textOne: String,
    textTwo: String,

    callbackOne: {
      type: Function,
      default: () => null,
    },
    callbackTwo: {
      type: Function,
      default: () => null,
    },

    colorOne: {
      type: String,
      default: 'black'
    },
    colorTwo: {
      type: String,
      default: 'grey'
    },

    className: {
      type: String,
      default: ''
    }
  }
}
</script>
