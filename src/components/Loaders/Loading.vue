<template>
  <sui-segment class="h-100">
   <sui-dimmer active class="height">
     <sui-loader>{{text}}</sui-loader>
   </sui-dimmer>
 </sui-segment>
</template>

<script>
export default {
  name: 'LoadingComponent',
  props: {
    text: {
      type: String,
      default: 'Loading...',
    },
  }
}
</script>
<style src="@/assets/style/css/scoped/height.css" scoped></style>
