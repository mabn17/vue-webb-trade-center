<template>
  <div class="h-100">
    <template v-if="isLoading">
      <LoadingComponent />
    </template>
    <template v-else>
      <h2>Stocks has sucsessfully been updated!</h2>
    </template>
  </div>
</template>

<script>
import DefaultUpdate from '@/views/Update/Update'

export default {
  name: 'update',
  extends: DefaultUpdate,
}
</script>
