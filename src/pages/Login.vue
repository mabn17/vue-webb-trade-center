<template>
  <div>
    <h1>WTC - Login</h1>
    <sui-divider section />
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
import Input from '@/components/Form/Input.vue';
import Submit from '@/components/Form/Submit.vue';
import Link from '@/components/Link/Link.vue';
import SimpleVueValidator from 'simple-vue-validator';
import Validations from '@/models/Validations/FormValidations';

export default {
  name: 'register',
  components: {
    Input, Submit,
    Link,
  },
  data() {
    return {
      email: '', password: '',
    };
  },
  validators: {
    email: function() { return Validations.email(SimpleVueValidator, this.email) },
    password: function() { return Validations.password(SimpleVueValidator, this.password) },
  },
  methods: {
    submit() {
      this.$validate().then(valid => valid);
    },
  }
}
</script>
<style lang="less" src="../assets/style/less/margin.less"></style>
