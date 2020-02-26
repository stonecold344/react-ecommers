import React from 'react'
import {Container,Button} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function CartTotal({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <Container>
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <Button className="btn-outline-danger bg-white text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                                clear cart
                            </Button>
                        </Link>
                        <h5>
                           <span className="text-title"> 
                               subtotal :<strong> $ {cartSubTotal}</strong>
                           </span>
                        </h5>
                        <h5>
                           <span className="text-title"> 
                               tax :<strong> $ {cartTax}</strong>
                           </span>
                        </h5>
                        <h5>
                           <span className="text-title"> 
                              total :<strong> $ {cartTotal}</strong>
                           </span>
                        </h5>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}
