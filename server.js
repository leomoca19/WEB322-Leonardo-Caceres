const express = require('express')
// const bodyParser = require('body-parser') // check if can be dropped
const routes = require('./routes')
const apiRoutes = require('./routes/api.routes')
const { connect, sync } = require("./db");
const app = express()
const PORT = 8080

// necesary for reading data from req.body, used in login
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


async function init() {
    await connect()
    await sync()
}

//Connectoin to database
init()


//SET THE VIEW ENGINE
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");


//JSON middleware
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true })) // check if can be dropped


//route handling
app.use(routes)
app.use('/api', apiRoutes)


app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
