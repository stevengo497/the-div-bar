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
        if(this.state.addClass) {
            clickedClass.push('gone');
        }
        return (
            <div>
                <h1 className="line-1 anim-typewriter">Welcome to the &lt;div&gt; bar</h1>
                    <img className={clickedClass.join(' ')} src={('/images/cartoonbar2.jpg')} onClick={(e) => this.handleClick(e)}/>
            </div>
        )
    }
}

export default Home;
