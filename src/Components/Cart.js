import axios from 'axios';
import React, { Component } from 'react'
import Products from './Products';


class Cart extends Products {
    constructor () {
        super();
        this.state = {
            cartOne : []
        }
    }

    // pogaroo() {
    //     // console.log('ayo wtf')
    //     // const { cartArray } = this.props
    //     // this.setState({cartOne: cartArray})
    //     // console.log('ree' + this.state.cartCart)
    //     axios.get('/api/cart')
    //     .then(res => {
    //         this.setState({cartOne: res.data})
    //         console.log('scathach :)')
    //         console.log(this.state.cartOne)
    //     })
    // }

    // removeItem (id) {
    //     let cartIndex = null
    //     this.state.cartCart.forEach ((e, i) => {
    //         if(id === e.id) {
    //             console.log(i)             
    //             axios.delete(`/api/cart/${i}`)
    //             .then(res => {
    //                 this.setState({cartCart: res.data})
    //                 console.log(res.data)
    //                 console.log(this.props.cartItemList)
    //             })
    //         }
    //     })
    // }

    render () {
        return (
            <div className='cartList'>
                <p> Cart </p>
                <h1 className='cartList'>{this.props.cartArray.map(e => 
                      <div>
                          <li>{ e.name }</li>
                          <li>{ `$${e.price}` }</li>
                          <li> {`Amount: ${e.quantity}`} </li>
                          <button onClick={ () => { this.props.removeItem(e.id) } }> Remove Item </button>
                      </div>  
                        
                        )}

                </h1>
            </div>
        )
    }

}

export default Cart