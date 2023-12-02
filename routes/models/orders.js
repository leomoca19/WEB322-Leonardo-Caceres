const express = require('express')
const apiOrders = express.Router()

const OrdersService = require('../../services/orders.service')

apiOrders.get('/', async (req, res) => 
    res.send(await OrdersService.findAll())
)

apiOrders.get('/:id', async (req,res) =>
    res.send(await OrdersService.findById(req.params.id))
)

apiOrders.delete('/:id', async (req,res) =>
    res.send(await OrdersService.delete(req.params.id))
)

apiOrders.post('/', async (req,res) => 
    res.send(await OrdersService.create({...req.body}))
)


module.exports = apiOrders