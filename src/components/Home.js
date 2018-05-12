import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '../styling/Home.css';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {addClass: false}
    }
    handleClick() {
        this.setState({addClass: !this.state.addClass});
  }
    render () {
        let clickedClass = ["beer"];
        let clickedSmoke = ['explosion']
        if(this.state.addClass) {
            clickedClass.push('gone');
            clickedSmoke.push('smoke');
        }
        return (
            <div>
                <h1 className="line-1 anim-typewriter">Welcome to the &lt;div&gt; bar</h1>
                <div className="barWrapper">
                    <img id="barPic" src={('/images/cartoonbar2.jpg')} />
                    <img id="beer1" className={clickedClass.join(' ')} src={('/images/beer1.png')} onClick={(e) => this.handleClick(e)}/>
                    <img id="explosion1" className={clickedSmoke.join(' ')}  src={('/images/explosion.png')}/>
                    </div>

            </div>
        )
    }
}

export default Home;
