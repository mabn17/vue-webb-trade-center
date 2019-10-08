const Validations = {
  email: (SimpleVueValidator, value) =>
    SimpleVueValidator.Validator.value(value).required().email(),
  password: (SimpleVueValidator, value) =>
    SimpleVueValidator.Validator.value(value).required().minLength(4),
  firstName: (SimpleVueValidator, value) =>
    SimpleVueValidator.Validator.value(value).required(),
  lastName: (SimpleVueValidator, value) =>
    SimpleVueValidator.Validator.value(value).required(),
  agree: (SimpleVueValidator, value) =>
    SimpleVueValidator.Validator.value(value).in([ true ]),
};

export default Validations;
