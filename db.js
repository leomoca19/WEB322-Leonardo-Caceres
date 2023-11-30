const Sequelize = require('sequelize')

// set up sequelize to point to our postgres database
let sequelize = new Sequelize('neondb', 'leomoca19', '5O4lcByxPMep', {
    host: 'ep-sparkling-bird-59202610-pooler.us-east-2.aws.neon.tech',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false },
    },
    query: {raw: true}
})


//Tables
const Users = sequelize.define('Users', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    dob: Sequelize.DATE,
    company: Sequelize.STRING,
    phone: Sequelize.STRING,
})

const Products = sequelize.define('Products', {
    name: Sequelize.STRING,
    isbn: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    description: Sequelize.STRING,
})

const Orders = sequelize.define('Orders', {
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    description: {
        type: Sequelize.STRING,
    },
})


//Table assosiations
// Users.hasMany(Orders)
// Orders.belongsTo(Users)

// Products.hasMany(Orders)
// Orders.belongsTo(Products)


const connect = async () => {
    try{
        sequelize.authenticate()
        console.log('Connection has been established successfully.')
    }
    catch(err){
        console.log('Unable to connect to the database:', err)
    }
}

const sync = async () => {
    try {
        await sequelize.sync()
        console.log('Models synchronized with the db.')
    } catch (err) {
        console.error('Error syncing models with the database:', err)
    }
}


module.exports = {
    connect,
    sync,
    Users,
    Products,
    Orders
}