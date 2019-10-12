<template>
  <div class="ui segment">
    <h1>WTC - Register</h1>
    <sui-divider section />
    <Ribbon v-bind:message="errorMessage" />
    <sui-form class="mt-2 pb-3">
      <b-row>
        <b-col sm="6">
          <Input
            text="First Name" type="text" v-model="firstName"
            :errorClass="{error: validation.hasError('firstName')}"
            :errorValue="validation.firstError('firstName')"
          />
        </b-col>
        <b-col sm="6">
          <Input
            text="Last Name" type="text" v-model="lastName"
            :errorClass="{error: validation.hasError('lastName')}"
            :errorValue="validation.firstError('lastName')"
          />
        </b-col>
      </b-row>
      <div class="mt-4">
        <b-row>
          <b-col md="6">
            <Input
              text="Email" type="email" v-model="email"
              :errorClass="{error: validation.hasError('email')}"
              :errorValue="validation.firstError('email')"
            />
          </b-col>
          <b-col md="6">
            <Input
              text="Password" type="password" v-model="password"
              :errorClass="{error: validation.hasError('password')}"
              :errorValue="validation.firstError('password')"
            />
          </b-col>
        </b-row>
      </div>
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
import DefaultRegister from '@/views/Membership/Register/Register'

export default {
  name: 'register',
  extends: DefaultRegister,
}
</script>
<style lang="less" src="@/assets/style/less/margin.less"></style>
