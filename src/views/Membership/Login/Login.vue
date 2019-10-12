<template>
  <div class="ui segment">
    <h1>WTC - Login</h1>
    <sui-divider section />
    <Ribbon v-bind:message="errorMessage" />
    <sui-form class="mt-2 pb-3">
      <b-row>
        <b-col md="6" class="my-2">
          <Input
            text="Email" type="email" v-model="email"
            :errorClass="{error: validation.hasError('email')}"
            :errorValue="validation.firstError('email')"
          />
        </b-col>
        <b-col md="6" class="my-2">
          <Input
            text="Password" type="password" v-model="password"
            :errorClass="{error: validation.hasError('password')}"
            :errorValue="validation.firstError('password')"
          />
        </b-col>
      </b-row>
      <div class="mt-3">
        <Submit value="Sign In" :callback="submit" />
        <Link value="Don't have an account? Sign Up" url="/register" />
      </div>
    </sui-form>
  </div>
</template>

<script>
import DefaultLogin from '@/views/Membership/Login/Login';

export default {
  name: 'login',
  extends: DefaultLogin,

  mounted() {
    this.errorMessage = this.ErrorService().checkLoginQuery(this.$route.query);
  },
}
</script>
<style lang="less" src="@/assets/style/less/margin.less"></style>
