const productsArray = require('../productsArray')
let cartArray = []

module.exports = {
    //this is the handler function to get the products array when the user first comes to the site
    products: (req, res) => {
        res.status(200).send(productsArray)
    },
    //this will get the cart
    getCart: (req, res) => {
        res.status(200).send(cartArray)
    },
    //this will add something to the cart
    addCart: (req, res) => {
        const {id, name, img, price, quantity} = req.body
        

        cartArray.push({id, name, img, price, quantity})
        // console.log(cartArray)


        res.status(200).send(cartArray)
    },
    //this will change the quantity of something in the cart
    changeQuantity: (req, res) => {
        const {id} = req.params
        const {num} = req.body

        cartArray.forEach((e, i) => {
            if(e.id === +id) {
                e.quantity = num
            }
        })
        console.log(cartArray)
        res.status(200).send(cartArray)
    },
    removeItem: (req, res) => {
        let productIndex = null

        cartArray.forEach((e, i) => {
            if(e.id === +req.params.id) {
                productIndex = i
            }
        })
        cartArray.splice(productIndex, 1)
        res.status(200).send(cartArray)
    }
}