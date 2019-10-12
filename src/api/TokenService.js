/** global localStorage */

import jwt_decode from 'jwt-decode'
const token_name = 'user_token'

const TokenService = {
  getUserToken: () => localStorage.getItem(token_name),
  removeUserToken: () => localStorage.removeItem(token_name),
  setUserToken: token => localStorage.setItem(token_name, token),
  decodeUserToken: () => jwt_decode(TokenService.getUserToken()),
  handleLogin: token => {
    TokenService.setUserToken(token)
    window.location.assign('/account')
  }
}

export default TokenService
