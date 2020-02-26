import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <Container>
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                            <h1 className="display-3">404</h1>
                            <h1 className="text-danger">error</h1>
                            <h1>page not found!</h1>
                            <h3>
                                the requested URL
                                <span className="text-danger">
                                    {this.props.location.pathname}
                                </span>{" "}
                                was not found!
                            </h3>
                        </div>  
                    </div>
                </Container>>
            </React.Fragment>

        )
    }
}
