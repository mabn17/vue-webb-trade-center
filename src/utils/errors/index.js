const ErrorHandeler = {
  generageDefault: (string) => `Warning! ${string}, login to continue`,

  checkLoginQuery: (query) => {
    let message = '';

    if (query.err) {
      message = ErrorHandeler.generageDefault('Token has expired');
    } else if (query.token) {
      message = ErrorHandeler.generageDefault('Not autherized');
    }
    return message;
  }
};

export default ErrorHandeler;
