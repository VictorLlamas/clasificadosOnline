import React , { Component }from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../../images/test.jpg'
import img2 from '../../images/404-page.png'

class PhotoCarousel extends Component{
    constructor(props){
        super(props)
        this.state = {
            img: img1,
            img2: img2,
        }
    }      
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div class="col-sm-12">
                        <Carousel fade="true">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={this.state.img}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={this.state.img2}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={this.state.img}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>     
          
    )}
}

export default PhotoCarousel