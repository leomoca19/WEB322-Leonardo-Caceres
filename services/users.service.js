const { log } = require('console')
const users = require('../data/fakeUsers.json')

class UsersService{
    static findAll = () => users

    static findById = (id) => 
        users.find((user) => user.id == id)

    static findByEmail = (email) => 
        users.find((user) => user.email == email)

    static findByUsername = (username) =>
        users.find((user) => 
            `${user.firstName} ${user.lastName}` == username)

    static create = (newUser) => {
        users.push(newUser)
        return users[users.length - 1]
    }

    static delete = (id) => 
        users.filter((id) =>
            id != UsersService.findById(id).id)
}

module.exports = UsersService