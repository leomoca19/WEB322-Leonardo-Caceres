const express = require('express')
const apiProducts = express.Router()

const products = require('../../data/fakeProducts')

apiProducts.get('/', (req, res) => 
    res.send(products)
)

apiProducts.get('/:id', (req,res) =>{
    const id = req.params.id
    const product = products.find(product => product.id == id)

    res.send(product)
})

apiProducts.delete('/:id', (req,res) =>{
    const id = req.params.id
    const product = products.find(product => product.id == id)

    products.filter((id) => id != product.id)
})

apiProducts.post('/', (req,res) =>{
    let newProduct = {...req.body} //verify if works as expected
    products.push(newProduct)
    res.send(newProduct)
})


module.exports = apiProducts