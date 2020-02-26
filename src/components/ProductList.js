import React, { Component } from 'react'
import Product from './Product'
import Title from "./Title"
import {ProductConsomer} from "../Context"

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsomer>
                                 {(value) =>{
                                     return value.products.map(product => {
                                         return <Product key={product.id} product={product}/>
                                        })
                                 }}
                            </ProductConsomer>
                        </div>
                    </div>
                </div>
                {/* <Product/> */}
            </React.Fragment>
        )
    }
}
