import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '../styling/Home.css';

class Home extends Component {
    render () {
        return (
            <div>
                <h1 className="line-1 anim-typewriter">Welcome to the &lt;div&gt; bar</h1>
                <div className="imageWrapper">
                    <img id="cheersPic" src={'/images/cheers.jpeg'}/>
                    <img id="newbarPic" src={'/images/newbar.jpeg'}/>
                    <img id="winePic" src={'/images/wine.jpg'}/>
                </div>

            </div>
        )
    }
}

export default Home;
