class AuthenticationService {
  static isAuthenticated = false

  static authenticate = (username, password) => { 
    this.isAuthenticated = username === 'admin' && password === 'password'
    return { isAuthenticated: this.isAuthenticated }
  }
}

module.exports = AuthenticationService;
