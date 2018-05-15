import React, { Component} from 'react';
import '../styling/TheVar.css';
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
            <div id="varWrapper">
                <h1 className="line-1 anim-var">&lt;<span>theVar</span>/&gt;</h1>
                    <SpecialityMenu show={this.state.lgShow} onHide={lgClose} />
                        <div className="specialityWrapper" onClick={() => this.setState({ lgShow: true })}>
                            <div className="specialityWord">Speciality Drinks</div>
                </div>
                    <AlegorithmMenu show={this.state.largeClose} onHide={largeClose} />
                        <div className="aleWrapper" onClick={() => this.setState({ largeClose: true })}>
                            <div className="aleWord">ALEgorithms</div>
                </div>
            </div>
        )
    }
}

export default TheVar;
