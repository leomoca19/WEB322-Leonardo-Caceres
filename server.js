const express = require('express')
const app = express()
const PORT = 8080

const users = [
    { id: 1, name: 'definetely a real person'},
    { id: 2, name: 'I am sooo a real person'},
    { id: 3, name: 'Realperson Jhonson'}
]

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})