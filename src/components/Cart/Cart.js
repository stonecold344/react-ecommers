import React, { Component } from 'react'
import Title from "../Title"
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import {ProductConsomer} from "../../Context"
import CartList from "./CartList"
import CartTotal from "./CartTotal"

export default class Cart extends Component {
    render() {
        return (
            <ProductConsomer>
                {value =>{
                    const {cart} = value;
                    if(cart.length>0){
                        return (
                            <React.Fragment>
                              <Title name="your" title="cart"/>
                              <CartColumns />
                              <CartList value={value} />
                              <CartTotal value={value} />
                            </React.Fragment>
                        )
                    }
                    else{
                        return(
                            <EmptyCart />
                        )
                    }
                    }}
            </ProductConsomer>
        )
    }
}
