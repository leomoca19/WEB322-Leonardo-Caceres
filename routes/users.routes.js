const express = require("express");
const userRoutes = express.Router();

const bodyParser = require('body-parser')

userRoutes.use(bodyParser.urlencoded({ extended: true }))



//Home menu
const menu =
    `<nav>
        <a href="/">Home</a>
        &nbsp;|&nbsp;
        <a href="/list">List</a>
    </nav>`

//Bootstrap middleware
const template = (title, html) => 
    `<html>
      <head>
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"/>
      </head>
      <body class="container">
          <div>${menu}</div>
          <h1>${title}</h1>
          <div>
              ${html}
          </div> 
      </body>
      </html>`

const loginContent = (errorMsg = '') =>
`<form method="POST">
    <div>${errorMsg}</div>
    <br>

    Name:&emsp;&emsp; 
    <input type="text" name="username"/>
    <br>

    Password:&nbsp;&nbsp; 
    <input type="password" name="password"/>
    <br>

    <button type="submit">GO!</button>
</form>`

userRoutes.get('/', (req, res)=>{
    res.send(template('Login', loginContent()))
})
userRoutes.post('/', (req, res)=>{
    const {username, password} = req.body
    console.log(`user ${username} | pass ${password}`)

    //change later for email and password from dbs
    if (username === 'admin' && password === 'admin')
        res.redirect('/list')
    else
        res.send(template('Login', loginContent('Invalid credentials. Please try again')))
})

module.exports = userRoutes