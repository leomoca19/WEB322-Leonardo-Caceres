const {users} = require('../db')

class UsersService{
    static findAll = async () => users.findAll()

    static findById = async (id) => users.findByPk(id)

    static findByIdWithOrders = async (id) => users.findByPk(id, { include: orders })
    
    static findByEmail = async (email) => users.findOne({ where: { email }})

    // username is the full name of the user fname + ' ' + lname
    static findByUsername = async (username) => 
        users.findOne({ where: { 
            firstName: username.split(' ')[0],
            lastName: username.split(' ')[1]
        }
    })

    static create = async (user) => users.create(user)

    static update = async (user) =>
        users.update(user, { where: {
            id: user.id 
        }, 
        returning: true,
    })

    static delete = async (id) => users.destroy({ where: { id } })
}

module.exports = UsersService