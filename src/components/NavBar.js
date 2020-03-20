import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";
import {Navbar, Nav,Form } from "react-bootstrap";
import {Badge} from "antd";
import logo from "../logo.svg";
import {ButtonContainer,SignUpInButtonContainer} from "./Button"; 
import styled from 'styled-components';
import {ProductConsomer} from "../Context"
import Autosuggest from 'react-autosuggest'
import {storeProducts} from "../data"



export default class NavBar extends Component {
  constructor () {
    super();
    this.state = {
      fireRedirect: false,
      value: '',
      suggestions: []
    }
  }
  
  UNSAFE_componentWillReceiveProps() {
    this.setState({ fireRedirect: false })
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : storeProducts.filter(item =>
      item.title.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  getSuggestionValue = (suggestion) => suggestion.title;
  
  renderSuggestion = (suggestion) => (
      <div>
      {suggestion.title}
      </div>
      
  );

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  
  submitForm = (e) => {
    e.preventDefault()
    this.setState({suggestions: [] ,fireRedirect: true})
  }


    render() {
      const { value, suggestions,fireRedirect } = this.state;
      const inputProps = {
        placeholder: 'Enter Input',
        value,
        onChange: this.onChange,
      };

      console.log(this.state)
        return (
            <NavWrapper>
                <Navbar collapseOnSelect expand="lg"   > 
                {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Navbar.Brand>
                  <Link to="/"><img src={logo} alt="store"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" >
                    <Nav.Item  >
                      {" "}<Link to="/" className="nav-link">Products</Link>
                    </Nav.Item>
                    <Nav.Item  >
                      {" "}<Link to="/about" className="nav-link">About</Link>
                    </Nav.Item>
                    
                    <Form inline onSubmit={(event)=>this.submitForm(event)}>
                       
                    <Autosuggest         
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                    />
                    <button className="searchButton" onClick={(event)=>this.submitForm(event)}>Search</button>
                    {fireRedirect && (<Redirect to={{pathname:'/results',state:{value:this.state.value}}} />)}

                    </Form> 
                </Nav>
                <Nav>
                 <Nav.Item className="d-flex">
                   <ProductConsomer>
                    {(value)=>{ return !value.isLoged?
                    (
                      <div>
                      <SignUpInButtonContainer onClick={value.handelPage2} >
                        <Link to="/signin" 
                      style={{textDecoration:'none', color:'var(--mainYyellow)'}}>
                      SignIn
                      </Link>
                      </SignUpInButtonContainer>
                      <SignUpInButtonContainer onClick={value.handelPage}>
                      <Link to="/signup" 
                      style={{textDecoration:'none', color:'var(--mainYyellow)'}}>
                      SignUp
                      </Link>
                      </SignUpInButtonContainer>
                      </div>
                    )
                      :
                    (
                      <div><Link to="/cart" className="mr-sm-2 justify-content-center" >
                      <ButtonContainer cartBtn>
                      <span className="mr-2"><i className="fa fa-cart-plus"/></span>
                         <Badge count = {<ProductConsomer>{(value)=>{ return (value.cart.length);}}</ProductConsomer>}/>
                           </ButtonContainer>
                         </Link>
                         <SignUpInButtonContainer >
                         <Link to="/" 
                         style={{textDecoration:'none', color:'var(--mainYyellow)'}} 
                         onClick={value.handelLogOut}
                         >
                         LogOut
                         </Link>
                         </SignUpInButtonContainer>
                         </div>
                      )
                    }}
                     </ProductConsomer>
                </Nav.Item>
                </Nav>
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
.badge{
    font-size:1.15rem;
    border:0.05rem solid;
    border-radius:25px ;
}
body {
    font-family: Helvetica, sans-serif;
  }
  
 
  .react-autosuggest__input {
    width: 240px;
    height: 30px;
    padding: 10px 20px;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border: 1px solid #aaa;
    border-radius: 4px;
  }
  
  .react-autosuggest__input--focused {
    outline: none;
  }
  
  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .react-autosuggest__suggestions-container {
    display: none;
  }
  
  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 51px;
    width: 280px;
    border: 1px solid #aaa;
    background-color: #fff;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }
  
  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }
  
  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
  
`