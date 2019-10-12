import Input from '@/components/Form/Input.vue'
import ApiClient from '@/api/client'
import SimpleVueValidator from 'simple-vue-validator'
import Validations from '@/models/Validations/FormValidations'

export default {
  name: 'DefaultBalance',
  components: {
    Input,
  },

  data() {
    return { balance: 0 }
  },

  validators: {
    balance: function() {
      return this.Validation().balance(this.VueValidator(), this.balance)
    },
  },

  methods: {
    Api: () => ApiClient,
    VueValidator: () => SimpleVueValidator,
    Validation: () => Validations,

    addPersonalAssets() {
      const that = this

      this.Api().post('/user/update/assets', {newAmount: this.balance})
      .then(res => {
        if (res.error) {
          return
        }

        that.update(true)
      });
    },
  },
}
