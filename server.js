const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const apiRoutes = require('./routes/api.routes')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use('/api', apiRoutes)


app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))