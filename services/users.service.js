const {users} = require('../db')

class UsersService{
    static findAll = async () => await users.findAll()

    static findById = async (id) => await users.findByPk(id)

    static findByEmail = async (email) => 
        await users.find((user) => user.email == email)

    static findByUsername = async (username) =>
        await users.find((user) => 
            `${user.firstName} ${user.lastName}` == username)

    static create = async (user) => await users.create(user)

    static update = async (user) => {
        let savedUser = await users.findByPk(user.id)
        Object.assign(savedUser, user)
        await savedUser.save()
        return savedUser
    }

    static delete = async (id) => 
        await users.destroy({ where: { id } })
}

module.exports = UsersService