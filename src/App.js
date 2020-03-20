import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Defualt from "./components/Default";
import Modal from "./components/Modals"
import About from './components/About';
import searchResults from "./components/searchResults"
import SignUp from './components/SignUp';
import SignIn from "./components/SignIn"
import Footer from "./components/Footer"

export default class App extends Component {
  render() {
    return (
        <React.Fragment>
            <NavBar/>
            <br/><br/>
            <Switch>
              <Route exact path="/" component={ProductList}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route path="/details" component={Details}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/results" component={searchResults}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/signin" component={SignIn}></Route>
              <Route component={Defualt}></Route>
            </Switch>
            <Footer />
            <Modal />
            
        </React.Fragment>
    )
  }
}



