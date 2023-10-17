const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const PORT = 8080

app.use(bodyParser.urlencoded({ extended: true }))

//Data structure
const users = require('./data/fakeUsers')


    app.get('/list', (req,res)=>{
        const userList = users.map(users => 
            `<li><a href="/detail/${users.id}">${users.firstName} ${users.lastName}</a></li>`
        )

        const content = `<ul>${userList.join('')}</ul>`

        res.send(template('List', content))
    })

    app.get('/detail/:id', (req, res) => {
        const id = req.params.id
        const user = users.find(user => user.id == id)

        const content = `<div>${id} ${user.firstName} ${user.lastName}</div>`
        res.send(template('Detail', content))
    })



app.listen(PORT, ()=>
    console.log(`Listening on port ${PORT}`)
)