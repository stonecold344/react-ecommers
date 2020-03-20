import React from 'react'
import {Container} from "react-bootstrap"

export default function EmptyCart() {
    return (
        <Container className="d-flex justify-content-center">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                <h1>your cart is empty</h1>
                </div>
            </div>
        </Container>
    )
}
