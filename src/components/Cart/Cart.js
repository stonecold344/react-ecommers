import React, { Component } from 'react'
import Title from "../Title"
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import {ProductConsomer} from "../../Context"
import CartList from "./CartList"
import CartTotal from "./CartTotal"
import { Redirect } from 'react-router-dom'

export default class Cart extends Component {
    render() {
        return (
            <ProductConsomer>
                {value =>{
                    if(value.isLoged){
                    const {cart} = value;
                    if(cart.length>0){
                        return (
                            <React.Fragment>
                              <Title name="your " title="cart"/>
                              <CartColumns />
                              <CartList value={value} />
                              <CartTotal 
                              value={value} 
                              history={this.props.history} 
                              />
                            </React.Fragment>
                        )
                    }
                    else{
                        return(
                            <EmptyCart />
                        )
                    }
                }
                else{
                    return  <Redirect to="/"/>
                }
                    }}
            </ProductConsomer>
        )
    }
}
