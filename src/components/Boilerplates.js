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
            <div id="menuWrapper">
                <h1 className="line-1 anim-boilerplates">&lt;<span>foodMenu</span>/&gt;</h1>
                    <AppetizerMenu show={this.state.lgShow} onHide={lgClose} />
                        <div className="appetizerWrapper" onClick={() => this.setState({ lgShow: true })}>
                            <div className="appetizerWord">&lt;App&gt;etizers</div>
                        </div>
                    <BoilerplateMenu show={this.state.largeClose} onHide={largeClose} />
                        <div className="boilerplateWrapper" onClick={() => this.setState({ largeClose: true })}>
                            <div className="boilerplateWord">Boilerplates</div>
                    </div>
            </div>
        )
    }
}

export default Boilerplates;
