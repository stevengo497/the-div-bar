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
        return (
            <div>
                <h1 className="line-1 anim-boilerplates">Boilerplates</h1>
                        <img id="appetizer"  src={('./images/appetizer.jpeg')} onClick={() => this.setState({ lgShow: true })}/>
                        <AppetizerMenu show={this.state.lgShow} onHide={lgClose} />

                <img id="cheeseburger"  src={('./images/cheeseburger.jpeg')} onClick={() => this.setState({ lgShow: true })}/>
                        <BoilerplateMenu show={this.state.lgShow} onHide={lgClose} />
            </div>
        )
    }
}

export default Boilerplates;
