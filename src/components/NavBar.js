import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import logo from "../logo.svg";
import {ButtonContainer} from "./Button"; 
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper>
                <Navbar collapseOnSelect > 
                {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Navbar.Brand>
                  <Link to="/"><img src={logo} alt="store"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-nav mr-auto align-items-center">
                    <Nav.Item  className="ml-5">
                      {" "}<Link to="/" className="nav-link">Products</Link>
                    </Nav.Item>
                </Nav>
                <Nav.Item>
                    <Link to="/cart" className="mr-sm-2">
                        <ButtonContainer>
                            My Cart<span className="mr-2"><i className="fa fa-cart-plus"/></span>
                        </ButtonContainer>
                    </Link>
                </Nav.Item>
                </Navbar.Collapse>
                </Navbar>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`