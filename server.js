const express = require('express')
const app = express()
const PORT = 8080

//Data structure
const users = [ //should be changed to the database(jsons file) contents
    { id: 1, name: 'definetely a real person'},
    { id: 2, name: 'I am sooo a real person'},
    { id: 3, name: 'Realperson Jhonson'}
]


//Home menu
const menu = 
`<nav>
    <a href="/">Home</a>
    &nbsp;|&nbsp;
    <a href="/list">List</a>
</div>`;

//Routes 
{
    app.get('/', (req, res)=>{
        res.send(`${menu}
        <h1>Login</h1>
        <form method="POST">
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button type="submit">GO!</button>
        </form>`)
    })
    app.post('/', (req, res)=>{
        res.send('Logged-in')
    })

    app.get('/list', (req,res)=>{
        const userList = users.map(users)=>{

        }
    })

    app.get('/details/:id', (req,res)=>{
        res.send(``) 
    })


}


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})