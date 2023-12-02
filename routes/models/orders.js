const express = require('express')
const apiOrders = express.Router()

const OrdersService = require('../../services/orders.service')

apiOrders.get('/', (req, res) => 
    res.send(OrdersService.findAll())
)

apiOrders.get('/:id', (req,res) =>
    res.send(OrdersService.findById(req.params.id))
)

apiOrders.delete('/:id', (req,res) =>
    res.send(OrdersService.delete(id))
)

apiOrders.post('/', (req,res) => 
    res.send(OrdersService.create({...req.body}))
)


module.exports = apiOrders