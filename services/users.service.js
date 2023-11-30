const users = require('../data/fakeUsers.json')

class UsersService{
    static findAll = () => users

    static findById = (id) => 
        users.find((user) => user.id == id)

    
}

module.exports = UsersService