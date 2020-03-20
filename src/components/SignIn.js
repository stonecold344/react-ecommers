import React, { Component } from "react";
import "../App.css"
import {Link, Redirect} from "react-router-dom"
import { ProductConsomer } from "../Context";



// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });
//   return valid;
// };

class SignIn extends Component {
  render() {
    console.log(this.props.location);
    
    return (
      <ProductConsomer>
        {(value)=>{
        const {fireRedirect2} = value;
        value.fireRedirect = !value.fireRedirect
        return(
          <div className="wrapper">
            <div className="form-wrapper">
              <h1>Log In</h1>
              <form onSubmit={(event)=>value.logHandleSubmit(event,this.props.location.state)} noValidate>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={value.logHandleChange}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={value.logHandleChange}
                  />
                </div>
                <div className="createAccount">
                  <button type="submit">Log In</button>
                  <small>Dont Have An Account?<Link to="signup" onClick={value.handelPage2}>Sign Up</Link></small>
                </div>
              </form>
              {fireRedirect2 && (<Redirect to={{ pathname:'/'}}/>)}
            </div>
          </div>
         )}
        }
      </ProductConsomer>
    );
  }
}

export default SignIn;
