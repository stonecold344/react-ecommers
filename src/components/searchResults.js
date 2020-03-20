import React, { Component } from 'react'
import Product from './Product'
import Title from "./Title"
import {ProductConsomer} from "../Context"
import {Container} from "react-bootstrap"

export default class searchResults extends Component {
    render() {
        console.log(this.props.history,this.props.location,this.props.location.state.value)
        // const value = this.props.location.state.value
        return (
            <div>
              {/* <h1>{value}</h1> */}
              <div className="py-5">
                    <Container className="container">
                        <Title  title="Result :"/>
                        <Title name={this.props.location.state.value}/>
                        <div className="row">
                            <ProductConsomer>
                                 {(value) =>{
                                     return value.products.map(product => {
                                         if(product.title === this.props.location.state.value){
                                         return <Product key={product.id} product={product}/>
                                         }
                                         else{
                                             return null
                                         }
                                        })
                                 }}
                            </ProductConsomer>
                        </div>
                    </Container>
                </div>
           </div>
        )
    }
}

