import config from '../config';

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },
  
  saveUsername(user_name) {
    window.sessionStorage.setItem(config.USER_KEY, user_name)
  },
  
  getUsername() {
    return window.sessionStorage.getItem(config.USER_KEY)
  },

  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },

  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },

  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },

  saveUserId(user_id) {
    return window.sessionStorage.setItem('user_id', user_id)
  }
}

export default TokenService
