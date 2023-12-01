// const { use } = require("../routes/login")
const UsersService = require("./users.service")

class AuthenticationService {
  static authenticate = (username, password) => {
    let user = UsersService.findByUsername(username)

    return  (user.isAdmin || user.password == password)
      ? { isAutheticated: true }
      : { isAutheticated: false }
}}

module.exports = AuthenticationService;