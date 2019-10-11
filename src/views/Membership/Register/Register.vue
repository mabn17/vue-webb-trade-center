<template>
  <div class="ui segment">
    <h1>WTC - Register</h1>
    <sui-divider section />
    <Ribbon v-bind:message="errorMessage" />
    <sui-form class="mt-2">
      <Input
        text="First Name" type="text" v-model="firstName"
        :errorClass="{error: validation.hasError('firstName')}"
        :errorValue="validation.firstError('firstName')"
      />
      <Input
        text="Last Name" type="text" v-model="lastName"
        :errorClass="{error: validation.hasError('lastName')}"
        :errorValue="validation.firstError('lastName')"
      />
      <Input
        text="Email" type="email" v-model="email"
        :errorClass="{error: validation.hasError('email')}"
        :errorValue="validation.firstError('email')"
      />
      <Input
        text="Password" type="password" v-model="password"
        :errorClass="{error: validation.hasError('password')}"
        :errorValue="validation.firstError('password')"
      />
      <Checkbox
        label="I agree to the Terms and Conditions" v-model="agree"
        v-bind:errorClass="{error: validation.hasError('agree')}"
        :errorValue="validation.firstError('agree')"
      />
      <Submit value="Sign Up" :callback="submit" />
      <Link value="Already a Member? Login" url="/login" />
    </sui-form>
  </div>
</template>

<script>
import DefaultForm from '@/views/Membership/Forms.js';
import { RegisterState } from '@/views/Membership/states.js';
import Checkbox from '@/components/Form/Checkbox.vue';

export default {
  name: 'register',
  extends: DefaultForm,
  components: {
    Checkbox,
  },

  data() { return RegisterState; },

  validators: {
    firstName: function() { return this.Validation().firstName(this.VueValidator(), this.firstName) },
    lastName: function() { return this.Validation().lastName(this.VueValidator(), this.lastName) },
    agree: function() { return this.Validation().agree(this.VueValidator(), this.agree) },
    email: function() { return this.Validation().email(this.VueValidator(), this.email) },
    password: function() { return this.Validation().password(this.VueValidator(), this.password) },
  },

  methods: {
    register() {
      const that = this;
      const data = {
        email: this.email, password: this.password, 
        firstName: this.firstName, lastName: this.lastName
      };

      this.Api().post('/register', data).then(res => {
        if (res.error) {
          this.errorMessage = `Warning, ${res.message}`;
          return;
        }

        that.login({ email: data.email, password: data.password });
      });
    },

    submit() {
      this.$validate().then(valid => {
        if (valid) {
          this.register();
        }
      });
    },
  }
}
</script>
<style lang="less" src="@/assets/style/less/margin.less"></style>
