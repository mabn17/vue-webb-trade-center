import TokenService from '../../api/TokenService';

const Accsess = {
  hasPremissions: (next) => {
    const token = TokenService.getUserToken();

    if (!token) {
       next({
        path: '/login',
        query: { token: false }
      });
    }

    return next();
  }
};

export default Accsess;
