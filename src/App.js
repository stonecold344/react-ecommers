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

export default class App extends Component {
  render() {
    return (
        <React.Fragment>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={ProductList}></Route>
              <Route path="/details" component={Details}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route component={Defualt}></Route>
            </Switch>
            <Modal />
        </React.Fragment>
    )
  }
}



