export const LoginState = {
  email: '', password: '',
  errorMessage: '',
};

export const RegisterState = {
  ...LoginState, agree: false,
  firstName: '', lastName: '',
};
