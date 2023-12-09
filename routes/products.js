const express = require('express')
const productRoutes = express.Router()
const { template, productDetails, table, deleteProductForm } = require('./htmlUtils')
const ProductsService = require('../services/product.service')

let products
let productList

const updateProductList = async () => {
  products = await ProductsService.findAll()
  productList = products.map(product => `
    <tr>
      <td>${product.id}</td>
      <td><a href="/users/${product.id}">${product.name}</a></td>
    </tr>
  `)
}
updateProductList()


productRoutes.get('/', (req, res) => 
    res.send(template("Products", table(productList, deleteProductForm)))
)

productRoutes.get('/:id', async (req, res) => {
    let product = await ProductsService.findById(req.params.id)
    res.send(template('Details', productDetails(product)))
})

productRoutes.post('/', async (req, res) => {
    await ProductsService.create({...req.body})
    await updateProductList()
    res.redirect('/products')
})

productRoutes.delete('/:id', async (req, res) => {
    await ProductsService.delete(req.params.id) 
    res.redirect('/products')
})


module.exports = productRoutes