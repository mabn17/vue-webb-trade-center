/** global localStorage */

const token_name = 'user_token';
const TokenService = {
  getUserToken: () => localStorage.getItem(token_name),
  removeUserToken: () => localStorage.removeItem(token_name),
  setUserToken: token => localStorage.setItem(token_name, token),
};

export default TokenService;
