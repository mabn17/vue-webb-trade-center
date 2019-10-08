<template>
  <div>
    <h1>WTC - Register</h1>
    <sui-divider section />
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
import Input from '@/components/Form/Input.vue';
import Submit from '@/components/Form/Submit.vue';
import Checkbox from '@/components/Form/Checkbox.vue';
import Link from '@/components/Link/Link.vue';
import SimpleVueValidator from 'simple-vue-validator';
import Validations from '@/models/Validations/FormValidations';

export default {
  name: 'register',
  components: {
    Input, Submit,
    Link, Checkbox,
  },
  data() {
    return {
      agree: false,
      firstName: '', lastName: '',
      email: '', password: '',
    };
  },
  validators: {
    firstName: function() { return Validations.firstName(SimpleVueValidator, this.firstName) },
    lastName: function() { return Validations.lastName(SimpleVueValidator, this.lastName) },
    email: function() { return Validations.email(SimpleVueValidator, this.email) },
    password: function() { return Validations.password(SimpleVueValidator, this.password) },
    agree: function() { return Validations.agree(SimpleVueValidator, this.agree) },
  },
  methods: {
    submit() {
      this.$validate().then(valid => valid);
    },
  }
}
</script>
<style lang="less" src="../assets/style/less/margin.less"></style>
