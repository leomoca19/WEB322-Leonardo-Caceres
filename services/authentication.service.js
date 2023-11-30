class AuthenticationService {
  static authenticate = (username, password) => {
    let authenticated = { isAutheticated: false}
    
    if(true /*user is admin or username macthes user password*/)
      authenticated = { isAutheticated: true}

   return authenticated
}}

module.exports = AuthenticationService;