import React, { Component } from 'react'
import Product from './Product'
import Title from "./Title"
import {ProductConsomer} from "../Context"
import {Container} from "react-bootstrap"
// import CarouselComp from "./CarouselComp"

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                {/* <CarouselComp /> */}
                <div className="py-5">
                    <Container className="container">
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
                    </Container>
                </div>
                {/* <Product/> */}
            </React.Fragment>
        )
    }
}
