<template>
  <div class="ui segment">
    <h1>WTC - Login</h1>
    <sui-divider section />
    <Ribbon v-bind:message="errorMessage" />
    <sui-form class="mt-2">
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
      <Submit value="Sign In" :callback="submit" />
      <Link value="Don't have an account? Sign Up" url="/register" />
    </sui-form>
  </div>
</template>

<script>
import DefaultForm from '@/views/Membership/Forms.js';
import { LoginState } from '@/views/Membership/states.js';
import ErrorHandeler from '@/utils/errors';

export default {
  name: 'login',
  extends: DefaultForm,

  data() { return LoginState; },

  validators: {
    email: function() { return this.Validation().email(this.VueValidator(), this.email) },
    password: function() { return this.Validation().password(this.VueValidator(), this.password) },
  },

  methods: {
    submit() {
      this.$validate().then(valid => {
        if (valid) {
          this.login({ email: this.email, password: this.password });
        }
      });
    },
  },

  mounted() {
    this.errorMessage = ErrorHandeler.checkLoginQuery(this.$route.query);
  },
}
</script>
<style lang="less" src="@/assets/style/less/margin.less"></style>
