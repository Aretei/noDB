import React, { Component } from 'react'
import Cart from './Cart'
import axios from 'axios'


class Products extends Component {

    constructor () {
        super();
        this.state = {
        cartItems: [],
        cartArray: [],
        liveCart: []
        }
    }


    addToCart (id) {
        let items = []
        let prodIndex = null
        axios.get('/api/products')
        .then(res => {
          items = res.data
          res.data.forEach((e,i) => {
            if(id === e.id){
              prodIndex = i
              axios.post('/api/cart', items[prodIndex])
              .then(res => {
                this.setState({cartItems: res.data})
                // console.log(this.state.cartItems)
              })
            }
            else {
                prodIndex = 'why is this not working'
            }
          })
        })
        .then(() => {
            axios.get('/api/cart')
            .then(res => {
                this.setState({cartArray: res.data})
                // console.log('test')
            })
        })

      }


    //   getCart () {
     
    // }

    // pogaroo() {
    //     // console.log('ayo wtf')
    //     // const { cartArray } = this.props
    //     // this.setState({cartOne: cartArray})
    //     // console.log('ree' + this.state.cartCart)
    //     axios.get('/api/cart')
    //     .then(res => {
    //         this.setState({liveCart: res.data})
    //         console.log(this.state.liveCart)
    //     })
    // }

    removeItem (id) {
        let resData = []
        console.log(this)
        let cartIndex = null
        this.state.cartArray.forEach ((e, i) => {
            if(id === e.id) {
                console.log(i)             
                axios.delete(`/api/cart/${i}`)
                .then(() => {
                    console.log('should have just been deleted')
                   axios.get('/api/cart')
                   .then (res => {
                        resData = res.data
                        this.setState({cartArray: res.data})
                   })
                    // this.setState({cartArray: res.data})
                    // console.log(res.data)
                    // console.log(this.props.cartItemList)
                })
                .catch(err => console.log(err))
            }
        })
        
    }
    increment (e) {
        // console.log(e.quantity)
        e.quantity = ++e.quantity
        // console.log(e.quantity)
        let body = {num: e.quantity}
        console.log(body)
     axios.put(`/api/cart/${e.id}`,body)
     .then(res => {
         console.log(res.data[0].quantity)
         e.quantity = res.data[0].quantity
         console.log(e)
         axios.get('/api/cart')
         .then (res => {
              this.setState({cartArray: res.data})
         })
         .catch(err => console.log(err))
     })
    }
    decrement (e) {
     // console.log(e.quantity)
     e.quantity = --e.quantity
     // console.log(e.quantity)
     let body = {num: e.quantity}
     console.log(body)
  axios.put(`/api/cart/${e.id}`,body)
  .then(res => {
      console.log(res.data[0].quantity)
      e.quantity = res.data[0].quantity
      console.log(e)
      axios.get('/api/cart')
      .then (res => {
           this.setState({cartArray: res.data})
      })
      .catch(err => console.log(err))
  })
    }


 

    render () {
        return (
            <div >
                <h1 className='productsList'> {this.props.products.map(e =>
                <div>
                    <li> { e.name } </li>
                    <li> { `$${e.price}` } </li>
                    <button id='addCart' onClick={ () => { this.addToCart(e.id,) }} > Add to Cart </button>
                </div>
                 )} </h1>
                 {/* <Cart cartArray={ this.state.cartArray } removeItem={this.removeItem}/> */}
                 <div className='cartList'>
                <p> Cart </p>
                <h1>{this.state.cartArray.map(e => 
                      <div>
                          <li>{ e.name }</li>
                          <li>{ `$${e.price}` }</li>
                          <li> {`Amount: ${e.quantity}`} 
                            <button onClick={() => {this.increment(e)}}> + </button>
                            <button onClick={() => {this.decrement(e)}}> - </button>
                          </li>
                          <button onClick={ () => { this.removeItem(e.id) } }> Remove Item </button>
                      </div>  
                        
                        )}

                </h1>
            </div>
            </div>
        )
    }

}

export default Products