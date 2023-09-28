const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
const port = 3000

const users = require('./data/fakeUsers.json')

app.get('/', (req, res)=>{
    res.render('index', {message: 'Today is ' + new Date})
})
app.get('/list', (req,res)=>{
    res.send('list', {users})
})



app.listen(port, ()=>{
    console.log(`Running on ${port}`)
})