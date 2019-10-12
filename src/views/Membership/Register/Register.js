import DefaultForm from '@/views/Membership/Forms'
import { RegisterState } from '@/views/Membership/states'
import Checkbox from '@/components/Form/Checkbox.vue'

export default {
  name: 'DefaultRegister',
  extends: DefaultForm,
  components: { Checkbox },

  data() { return RegisterState },

  validators: {
    firstName: function() { return this.Validation().firstName(this.VueValidator(), this.firstName) },
    lastName: function() { return this.Validation().lastName(this.VueValidator(), this.lastName) },
    agree: function() { return this.Validation().agree(this.VueValidator(), this.agree) },
    email: function() { return this.Validation().email(this.VueValidator(), this.email) },
    password: function() { return this.Validation().password(this.VueValidator(), this.password) },
  },

  methods: {
    register() {
      const that = this
      const data = {
        email: this.email, password: this.password, 
        firstName: this.firstName, lastName: this.lastName
      };

      this.Api().post('/register', data).then(res => {
        if (res.error) {
          this.errorMessage = `Warning, ${res.message}`
          return
        }

        that.login({ email: data.email, password: data.password })
      });
    },

    submit() {
      this.$validate().then(valid => {
        if (valid) {
          this.register()
        }
      });
    },
  }
}