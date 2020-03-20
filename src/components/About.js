import React, { Component } from 'react'
import Title from './Title'
import { ProductConsomer } from '../Context'
import {Redirect} from "react-router-dom"

export default class About extends Component {
    render() {
        return (
            <ProductConsomer>
                {(value)=>
                {console.log(value)
                 const {fireRedirect} = value   
                return( 
                 <div className="wrapper">
                  <div className="form-wrapper">
                   <Title name="Contect" title="Us"/>
                    <div className="form-content">
                     <p>Enter you details in this form below : </p>
                      <form  onSubmit={value.handleContectSubmit} >
                        <label>First Name</label>
                        <input 
                        type="text"  
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={value.handelContectChange}
                        />
                        <label>Last Name</label>
                        <input 
                        type="text"  
                        name="lastName" 
                        placeholder="Last Name" 
                        onChange={value.handelContectChange}
                        />
                        <label>Email</label>
                        <input 
                        type="email"  
                        name="email" 
                        placeholder="Email" 
                        onChange={value.handelContectChange}
                        />
                       <label>Subject</label>
                       <textarea name="subject" placeholder="Write something.." row="6" onChange={value.handelContectChange}/>
                       <div className="contectButton">
                          <button type="submit">Submit</button>
                       </div>
                      </form>
                      {fireRedirect && (<Redirect to={{ pathname:'/'}}/>)}
                     </div>
                    </div>
                   </div>
                  )
                 }
                }
                </ProductConsomer>
        )
    }
}
