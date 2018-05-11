import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '../styling/Home.css';

class Home extends Component {
    render () {
        return (
            <div>
                <h1 className="line-1 anim-typewriter">Welcome to the &lt;div&gt; bar</h1>
                <video autoPlay>
                    <source id="theHomePic"  src={('./images/beerglass.mp4')} type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default Home;
