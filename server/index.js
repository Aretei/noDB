const express = require('express')
const control = require('./controllers/controllers')
const app = express()
const port = 4321

app.use(express.json())

app.get('/api/products', control.products)

app.get('/api/cart', control.getCart)
app.post('/api/cart', control.addCart)
app.put('/api/cart/:id', control.changeQuantity)
app.delete('/api/cart/:id', control.removeItem)



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})