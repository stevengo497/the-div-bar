import React, { Component} from 'react';
import '../styling/TheVar.css';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';
import SpecialityMenu from './Speciality';
import AlegorithmMenu from './Alegorithm';

class TheVar extends Component {
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
                <h1 className="line-1 anim-var">The Var</h1>
                <div className="specialityWrapper">
                        <span className="specialityWord">Speciality Drinks</span>
                        <img className="specialityPic"  src={('./images/garnisheddrink.jpg')} onClick={() => this.setState({ lgShow: true })}/>
                    <SpecialityMenu show={this.state.lgShow} onHide={lgClose} />
                </div>
                <div className="aleWrapper">
                        <span className="aleWord">ALEgorithms</span>
                        <img className="alePic"  src={('./images/beer.jpg')} onClick={() => this.setState({ largeClose: true })}/>
                    <AlegorithmMenu show={this.state.largeClose} onHide={largeClose} />
                </div>
            </div>
        )
    }
}

export default TheVar;
