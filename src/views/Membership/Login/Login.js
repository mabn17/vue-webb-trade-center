import DefaultForm from '@/views/Membership/Forms'
import ErrorHandeler from '@/utils/errors';
import { LoginState } from '@/views/Membership/states'

export default {
  name: 'DefaultLogin',
  extends: DefaultForm,

  data() { return LoginState; },

  validators: {
    email: function() { return this.Validation().email(this.VueValidator(), this.email) },
    password: function() { return this.Validation().password(this.VueValidator(), this.password) },
  },

  methods: {
    ErrorService: () => ErrorHandeler,

    submit() {
      this.$validate().then(valid => {
        if (valid) {
          this.login({ email: this.email, password: this.password })
        }
      });
    },
  },
}
