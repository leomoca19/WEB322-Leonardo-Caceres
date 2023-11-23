const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))


// const Sequelize = require('sequelize');

// // set up sequelize to point to our postgres database
// let sequelize = new Sequelize('neondb', 'leomoca19', '5O4lcByxPMep', {
//   host: 'ep-sparkling-bird-59202610-pooler.us-east-2.aws.neon.tech',
//   dialect: 'postgres',
//   port: 5432,
//   dialectOptions: {
//     ssl: { rejectUnauthorized: false },
//   },
//   query: {raw: true}
// })


// // Define a "Project" model
// const Project = sequelize.define('Project', {
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT,
// })


// // create a new "Project"/row and add it to the database
// sequelize.sync().then(() => 
//     Project.create({
//       title: 'Project1',
//       description: 'First Project',
//     })
//     .then((project) => console.log('success!'))
//     .catch((error) => console.log('something went wrong!'))
// )