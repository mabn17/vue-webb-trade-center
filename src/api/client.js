import axios from 'axios'
import TokenService from '@/api/TokenService'

export const handleError = e => {
  if (e.response) {
    return e.response.data.errors.detail
  }

  return 'Could not reach the server'
};


const ApiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
})

ApiClient.interceptors.request.use(
  request => {
    const token = TokenService.getUserToken()
    if (token) {
      request.headers['x-access-token'] = token
    }

    return request
  },

  error => Promise.reject(error),
)

/**
 * Bad solution, do not judge :)
 * Don't want to change the api response for the React version.
*/
ApiClient.interceptors.response.use(undefined, error => {
  const err = handleError(error)
  const jwtErrors = ['signature', 'jwt', 'token']

  for (let i = 0; i < jwtErrors.length; i++) {
    if (err.includes(jwtErrors[i])) {
      TokenService.removeUserToken()
      return window.location.assign('/login?err=invalid_token')
    }
  }

  return {
    error: true,
    message: err
  };
});

export default ApiClient
