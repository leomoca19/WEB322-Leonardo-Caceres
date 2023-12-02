const Sequelize = require('sequelize')
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = 
    require('./neontech.credentials')

// populate the database, will remain comented after 1 execution
const { seedDatabase } = require('./data/db.population')

// set up sequelize to point to postgres database
let sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false },
    },
    query: {raw: true}
})


//Tables
const users = sequelize.define('users', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    dob: Sequelize.DATE,
    company: Sequelize.STRING,
    phone: Sequelize.STRING,
})

const products = sequelize.define('products', {
    name: Sequelize.STRING,
    isbn: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    description: Sequelize.STRING,
})

const orders = sequelize.define('orders', {
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    description: {
        type: Sequelize.STRING,
    },
})


//Table assosiations
users.hasMany(orders)
orders.belongsTo(users)

products.hasMany(orders)
orders.belongsTo(products)


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
        await sequelize.sync({alter: true})
        await seedDatabase()
        console.log('Models synchronized with the db.')
    } catch (err) {
        console.error('Error syncing models with the database:', err)
    }
}


module.exports = {
    connect,
    sync,
    users,
    products,
    orders
}