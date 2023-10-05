const express = require('express')
const app = express()
const PORT = 8080

//Data structure
const users = [ //should be changed to the database(jsons file) contents
    { id: 1, name: 'definetely a real person'},
    { id: 2, name: 'I am sooo a real person'},
    { id: 3, name: 'Realperson Jhonson'}
]




//Routes
app.get('/', (req, res)=>{
    send('<h1>Log-in</h1>')
})


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})