import React, { Component } from 'react'
import {Container,Row,Col, ListGroup} from "react-bootstrap"
import styled from "styled-components"
import {Link} from "react-router-dom";


export default class Fotter extends Component {
    render() {
        return (
             <FooterWrapper >
                <div className="mt-5 pt-5 pb-5 footer">
                <Container  >
                  <Row>
                    <Col className="col-lg-5 col-xs-12 about-company">
                      <h5>Heading</h5>
                      <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                      <p style={{display:"flex",justifyContent:"space-evenly"}}>
                        <a href="#">
                          <i className="fa fa-facebook-square mr-1"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-youtube-square"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-twitter-square"></i>
                        </a>
                      </p>
                    </Col>
                    <Col className="col-lg-3 col-xs-12 links">
                      <h5 className="mt-lg-0 mt-sm-3">Links</h5>
                        <ListGroup as="ul" className="m-0 p-0">
                          <Link to="/">Lorem ipsum</Link>
                          <Link to="/">Nam mauris velit</Link>
                          <Link to="/">Etiam vitae mauris</Link>
                          <Link to="/">Fusce scelerisque</Link>

                        </ListGroup>
                    </Col>
                    <Col className="col-lg-4 col-xs-12 location">
                      <h5 className="mt-lg-0 mt-sm-4">Location</h5>
                      <p>Hashmonaim 100, Tel-aviv</p>
                      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(+972) 999-9999</p>
                      <p><i className="fa fa-envelope-o mr-3"></i>info@myphonestore.com</p>
                    </Col>
                  </Row>
                  <Row className=" mt-5">
                    <Col className="copyright" >
                      <p className="" style={{display:"flex",justifyContent:"center"}}><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
                    </Col>
                  </Row>
                </Container>
                </div>
           </FooterWrapper>

        )
    }
}
const FooterWrapper = styled.footer`
.footer{
  background-color: var(--mainBlue) !important;
  color:white;
  
  .links{
    ul {list-style-type: none;}
    li a{
      color: white;
      transition: color .2s;
      &:hover{
        text-decoration:none;
        color:#4180CB;
        }
    }
  }  
  .about-company{
    i{font-size: 25px;}
    a{
      color:white;
      transition: color .2s;
      &:hover{color:#4180CB}
    }
  } 
  .location{
    i{font-size: 18px;}
  }
  .copyright p{border-top:1px solid rgba(255,255,255,.1);} 
}
}
`
