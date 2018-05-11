import React, { Component} from 'react';
import '../styling/Boilerplates.css';
import AppetizerMenu from './AppetizerMenu';
import BoilerplateMenu from './BoilerplateMenu';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';

class Boilerplates extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        lgShow: false
      };
    }
    render () {
        let lgClose = () => this.setState({ lgShow: false });
        let largeClose = () => this.setState({ largeClose: false });
        return (
            <div>
                <h1 className="line-1 anim-boilerplates">Food Menu</h1>
                    <div className="appetizerWrapper">
                            <span className="appetizerWord">&lt;App&gt;etizers</span>
                            <img className="appetizer"  src={('./images/appetizer.jpeg')} onClick={() => this.setState({ lgShow: true })}/>
                        <AppetizerMenu show={this.state.lgShow} onHide={lgClose} />
                    </div>
                    <div className="boilerplateWrapper">
                            <span className="boilerplateWord">Boilerplates</span>
                            <img className="boilerplate"  src={('./images/cheeseburger.jpeg')} onClick={() => this.setState({ largeClose: true })}/>
                        <BoilerplateMenu show={this.state.largeClose} onHide={largeClose} />
                    </div>
            </div>
        )
    }
}

export default Boilerplates;
