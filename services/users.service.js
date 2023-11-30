const { log } = require('console')
const users = require('../data/fakeUsers.json')

class UsersService{
    static findAll = () => users

    static findById = (id) => 
        users.find((user) => user.id == id)

    static create = (newUser) => {
        users.push(newUser)
        return users[users.length - 1]
    }
}

module.exports = UsersService