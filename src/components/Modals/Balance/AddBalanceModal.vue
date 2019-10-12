<template>
  <sui-modal v-model="show" :closable="false">
    <sui-modal-header>Deposit</sui-modal-header>
    <sui-modal-content>
      <sui-modal-description>
        <sui-header>How much balance would you like to add?</sui-header>
          <Input
            text="" type="number" v-model="balance"
            :errorClass="{error: validation.hasError('balance')}"
            :errorValue="validation.firstError('balance')"
          />
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button negative @click.native="close()">
        Cancel
      </sui-button>
      <sui-button positive @click.native="submit()">
        Add
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
import DefaultBalance from './AddBalance'

export default {
  name: 'BalanceModal',
  extends: DefaultBalance,

  props: {
    callback: Function,
    update: Function,
    show: Boolean,
  },

  methods: {
    close() { this.callback() },

    submit() {
      this.$validate().then(valid => {
        if (valid) {
          this.addPersonalAssets()
        }
      })
    },
  },
}
</script>
<style lang="less" src="@/assets/style/less/modal.less"></style>
