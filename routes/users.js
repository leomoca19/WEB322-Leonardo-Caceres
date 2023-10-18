const express = require('express')
const userRoutes = express.Router()
const {template} = require('./htmlUtils')


//Data structure
const users = require('../data/fakeUsers')

userRoutes.get('/', (req,res)=>{
    const userList = users.map(users => `
        <tr>
            <td>${users.id}</td>
            <td><a href="/users/${users.id}">${users.firstName} ${users.lastName}</a></td>
        </tr>
    `)

    const table = `
        <table class="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                ${userList.slice(0, 25).join('')}
            </tbody>
        </table>
    `

    res.send(template('Users', table))
})

userRoutes.get('/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id)

    const table = `
        <table class="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>email</th>
                    <th>Birth date</th>
                    <th>Company</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <td>${user.id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.dob}</td>
                <td>${user.company}</td>
                <td>${user.phone}</td>
            </tbody>
        </table>
    `

    res.send(template('Details', 
        `<div>${id} ${user.firstName} ${user.lastName}</div>`))
})

module.exports = userRoutes
