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

    console.log(
        user.id,
        user.firstName,
        user.lastName,
        user.email,
        user.dob,
        user.company,
        user.phone)

    const table = `
        <table class="user-table">
        <tbody>
            <tr>
                <th>ID:</th>
                <td>${user.id}</td>
            </tr>
            <tr>
                <th>First Name:</th>
                <td>${user.firstName}</td>
            </tr>
            <tr>
                <th>Last Name:</th>
                <td>${user.lastName}</td>
            </tr>
            <tr>
                <th>Email:</th>
                <td>${user.email}</td>
            </tr>
            <tr>
                <th>Birth Date:</th>
                <td>${user.dob}</td>
            </tr>
            <tr>
                <th>Company:</th>
                <td>${user.company}</td>
            </tr>
            <tr>
                <th>Phone:</th>
                <td>${user.phone}</td>
            </tr>
        </tbody>
    `

    res.send(template('Details', table))
})

module.exports = userRoutes
