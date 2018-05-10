import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <div>
                <h1 className="line-1 anim-typewriter">Welcome to the &lt;div&gt; bar</h1>
                <img id="theHomePic"  src={('./images/storefront.jpeg')} />
            </div>
        )
    }
}

export default Home;
