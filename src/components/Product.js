import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import {ProductConsomer} from "../Context"
import {Card,Container,Image, Button} from "react-bootstrap"
import PropTypes from "prop-types"

export default class Product extends Component {
    render() {
        const {
            id,
            title,
            img, 
            price, 
            inCart
            }= this.props.product;
            
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <Card>
                    <ProductConsomer>
                        {(value) => (<Container className="img-container p-5" onClick={()=>value.handelDetail(id)}>
                            <Link to="/details" >
                            <Image src={img} alt="product img" className="card-img-top"/>
                            </Link>
                            {value.isLoged?(<Button 
                            className="cart-btn" 
                            disabled={inCart ? true:false}
                            onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                                }
                              }
                            >
                            {inCart?
                            (<p className="text-capitalize mb-0" disabled>InCart</p>):
                            (<i className="fa fa-cart-plus"></i>)}
                            </Button>):(null)}
                        </Container>)}
                   </ProductConsomer>
                   <Card.Footer className="card-footer d-flex justify-content-between">
                         <p className="align-self-center mb-0">{title}</p>
                         <h5 className="text-blue font-italic mb-0">
                             <span >$</span>
                             {price}
                         </h5>
                   </Card.Footer>
                </Card>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({id:PropTypes.number,img:PropTypes.string,title:PropTypes.string,price:PropTypes.number,inCart:PropTypes.bool}).isRequired
};

const ProductWrapper=styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}

.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
}
&:hover{
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%, 100%);
    transition:all 1s linear
}

.img-container:hover .cart-btn{
    transform:translate(0, 0) ;
}

.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}

`