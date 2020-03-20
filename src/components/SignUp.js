import React, { Component } from "react";
import "../App.css"
import {Link, Redirect} from "react-router-dom"
import { ProductConsomer } from "../Context";



class SignUp extends Component {
  render() {
    return (
      <ProductConsomer>
        {(value)=>{
          const { formErrors,fireRedirect,users} = value;
          return(
            <div className="wrapper">
              <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={value.handleSubmit} noValidate>
                  <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className={formErrors.firstName.length > 0 ? "error" : null}
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      noValidate
                      onChange={value.handleChange}
                    />
                    {formErrors.firstName.length > 0 && (
                      <span className="errorMessage">{formErrors.firstName}</span>
                    )}
                  </div>
                  <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className={formErrors.lastName.length > 0 ? "error" : null}
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      noValidate
                      onChange={value.handleChange}
                    />
                    {formErrors.lastName.length > 0 && (
                      <span className="errorMessage">{formErrors.lastName}</span>
                    )}
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      className={formErrors.email.length > 0 ? "error" : null}
                      placeholder="Email"
                      type="email"
                      name="email"
                      noValidate
                      onChange={value.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                      className={formErrors.password.length > 0 ? "error" : null}
                      placeholder="Password"
                      type="password"
                      name="password"
                      noValidate
                      onChange={value.handleChange}
                    />
                    {formErrors.password.length > 0 && (
                      <span className="errorMessage">{formErrors.password}</span>
                    )}
                  </div>
                  <div className="createAccount">
                    <button type="submit">Create Account</button>
                    <small>Already Have an Account?<Link to="signin" onClick={value.handelPage}>Sign In</Link></small>
                  </div>
                </form>
                {fireRedirect && (<Redirect to={{pathname:'/signin',state:{users:[users]}}} />)}
              </div>
            </div>)} 
          }
      </ProductConsomer>
    );
  }
}

export default SignUp;
