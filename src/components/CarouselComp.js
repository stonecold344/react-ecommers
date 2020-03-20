import React, { Component } from 'react'
import {Carousel,Image} from "react-bootstrap"

export default class CarouselComp extends Component {
    render() {
        return (
            <React.Fragment>
            <Carousel >
            <Carousel.Item className="d-flex justify-content-center">
                <Image
                className="d-block w-50"
                src="https://cdn.vox-cdn.com/thumbor/vFbxezqB4fgK1-VirclQI8roaD8=/0x0:2040x1360/1200x675/filters:focal(1398x346:1724x672)/cdn.vox-cdn.com/uploads/chorus_image/image/65253817/akrales_190912_3656_0027.0.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center">
                <Image
                className="img-fluid d-block w-50"
                src="https://cdn.vox-cdn.com/thumbor/vFbxezqB4fgK1-VirclQI8roaD8=/0x0:2040x1360/1200x675/filters:focal(1398x346:1724x672)/cdn.vox-cdn.com/uploads/chorus_image/image/65253817/akrales_190912_3656_0027.0.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center align-self-center">
                <Image
                className="img-fluid d-block w-50"
                src="https://cdn.vox-cdn.com/thumbor/vFbxezqB4fgK1-VirclQI8roaD8=/0x0:2040x1360/1200x675/filters:focal(1398x346:1724x672)/cdn.vox-cdn.com/uploads/chorus_image/image/65253817/akrales_190912_3656_0027.0.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
           </Carousel>
            </React.Fragment>
        )
    }
}
