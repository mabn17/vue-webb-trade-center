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
import SimpleVueValidator from 'simple-vue-validator';
import ApiClient from '@/api/client';
import Validations from '@/models/Validations/FormValidations';
import TokenService from '@/api/TokenService';

import Input from '@/components/Form/Input.vue';
import Submit from '@/components/Form/Submit.vue';
import Link from '@/components/Link/Link.vue';
import Ribbon from '@/components/Link/Ribbon.vue';

export default {
  name: 'register',
  components: {
    Input, Submit,
    Link, Ribbon
  },

  data() {
    return {
      email: '', password: '',
      errorMessage: ''
    };
  },

  validators: {
    email: function() { return Validations.email(SimpleVueValidator, this.email) },
    password: function() { return Validations.password(SimpleVueValidator, this.password) },
  },

  methods: {
    login() {
      const data = { password: this.password, email: this.email };
      ApiClient.post('/login', data).then(res => {
        if (res.error) {
          this.errorMessage = `Warning, ${res.message}`;
          return;
        }

        const { token } = res.data.data;
        TokenService.handleLogin(token);
      });
    },

    submit() {
      this.$validate().then(valid => {
        if(valid) {
          this.login();
        }
      });
    },
  },

  mounted() {
    const query = this.$router.history.current.query.err;
    if (query) {
      this.errorMessage = 'Warning, Token has expired';
    }
  },
}
</script>
<style lang="less" src="../assets/style/less/margin.less"></style>
