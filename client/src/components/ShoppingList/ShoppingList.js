import React, { Component } from 'react';
import ShopList from './ShopList'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import 'react-notifications/lib/notifications.css';


class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: null,
      list: [],
      userID: null
    }
    this.favorites = this.favorites.bind(this)
  }

  componentDidMount(){
    fetch('/api/products')
      .then(data => data.json())
      .then(data => this.setState({products: data})
      );
      console.log(this.state.products)
      console.log("HERE")
      this.props.fetchUser();
    }

  remountComponent(){
    fetch('/api/products')
      .then(data => data.json())
      .then(products => this.setState({products})
      );
      this.props.fetchUser();
  }

  favorites = () => {
    return (
      this.props.auth.product_id.forEach( id => {
        console.log(id)
        this.state.products.forEach( product => {
          if(product._id === id) {
            this.state.list.push(product);
          }
        })
      })
    )
  }

  emailList = emailList => {
    fetch('/api/fishywishy/')
    .then(response => console.log(response));
  }

  mailButton() {
    return (<button className="btn btn-primary" onClick={() => this.emailList()}> Email your shopping list! </button>
    )
  }

  render(){
    const products = <ShopList products={this.state.list} remount={this.remountComponent}/>
    if(this.state.products && this.props.auth){
      return (
        <div>
          {this.favorites()}
          {products}
          {this.mailButton()}
        </div>
      )}
      return <h3>Loading products...</h3>
    }
  }

function mapStateToProps({auth}) {
  return { auth }
}


export default connect(mapStateToProps, actions) (ShoppingList);
