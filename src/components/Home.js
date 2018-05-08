import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <div>
                <Carousel>
                      <Carousel.Item>
                        <img  src={('./images/barimage.jpg')} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img  src={('./images/garnisheddrink.jpg')} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img  src={('./images/relax.jpg')} />
                      </Carousel.Item>
                    </Carousel>
            </div>
        )
    }
}

export default Home;
