import SimpleVueValidator from 'simple-vue-validator'
import ApiClient from '@/api/client'
import Validations from '@/models/Validations/FormValidations'
import TokenService from '@/api/TokenService'

import Input from '@/components/Form/Input.vue'
import Submit from '@/components/Form/Submit.vue'
import Link from '@/components/Link/Link.vue'
import Ribbon from '@/components/Link/Ribbon.vue'

export default {
  name: 'DefaultForm',
  components: {
    Input, Submit,
    Link, Ribbon
  },

  methods: {
    Api: () => ApiClient,
    Token: () => TokenService,
    VueValidator: () => SimpleVueValidator,
    Validation: () => Validations,

    login(data) {
      this.Api().post('/login', data).then(res => {
        if (res.error) {
          this.errorMessage = res.message
          return
        }
        const { token } = res.data.data

        this.Token().handleLogin(token)
      });
    },
  },
}
