import React, { Component } from 'react'
import styled from "styled-components"
import {Image,Container} from "react-bootstrap"
import {ProductConsomer} from "../Context"
import {ButtonContainer} from "./Button"
import {Link} from "react-router-dom"

export default class Models extends Component {
    render() {
        return (
            <ProductConsomer>
                {(value)=>{
                    const{modalOpen,closeModal} = value;
                    const {img,title,price} = value.modalProduct;
                    if(! modalOpen){
                        return null;
                    }
                    else {
                        return(
                            <ModalContainer onClick={()=>closeModal()}>
                            <Container className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 lg-4 text-center text-capitalize">
                                        <h5>item added to the cart</h5>
                                        <Image src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : ${price}</h5>
                                        <div className="d-flex justify-content-between">
                                        <Link to="/">
                                          <ButtonContainer 
                                          onClick={()=>closeModal()}>
                                              store
                                          </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                          <ButtonContainer cart 
                                          onClick={()=>closeModal()}>
                                               cart
                                          </ButtonContainer>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                           </Container>
                           </ModalContainer>
                       );
                    }
                } 
            }
            </ProductConsomer>

        )
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0, 0, 0, 0.3);
display:flex;
align-items:center;
justify-content:center;

#modal{
    background:var(--mainWhite);
    border:0.5rem solid;
}
`;