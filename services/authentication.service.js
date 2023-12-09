class AuthenticationService {
  static isAuthenticated = false

  static authenticate = async (username, password) => 
    this.isAuthenticated = username === 'admin' && password === 'password';
}

module.exports = AuthenticationService;
