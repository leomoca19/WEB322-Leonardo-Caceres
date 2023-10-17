const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const PORT = 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))