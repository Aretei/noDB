import React, { Component } from 'react'
import Cart from './Components/Cart'
import Header from './Components/Header'
import Products from './Components/Products'
import CartItem from './Components/CartItem'
import axios from 'axios'
import './App.css';


class App extends Component {

  constructor () {
    super();
    this.state = {
      products: [],
    }
    // this.addToCart = this.addToCart.bind(this)
    // this.getCart = this.getCart.bind(this)
  }

  componentDidMount () {
    axios.get('/api/products')
    .then(res => {
        // console.log(res.data)
        // console.log('please')
        this.setState({products: res.data})
        // console.log(this.state.products)
    })
    .catch(err => console.log(err))
}

  // addToCart (id) {
  //   let items = []
  //   let prodIndex = null
  //   axios.get('/api/products')
  //   .then(res => {
  //     items = res.data
  //   })
  //   items.forEach((e,i) => {
  //     if(id === e.id){
  //       prodIndex = i
  //     }
  //   })
  //   axios.post('/api/cart', items[prodIndex])
  //   .then(res => {
  //     this.setState({cartArray: res.data})
  //   })
  // }

//   getCart () {
//     axios.get('/api/cart')
//     .then(res => {
//         this.setState({cartArray: res.data})
//         console.log('test')
//     })
// }

  render () {
    return (
      <div>
        <section className='holdHeader'> 
        <header className='header' ><Header /></header>
        </section>
        
        <section className='main'>
          <Products products={ this.state.products }  gcf={this.getCart}/>
          
        </section>
      </div>

    );
  }
  }


export default App;
