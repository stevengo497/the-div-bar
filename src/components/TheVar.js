import React, { Component} from 'react';
import '../styling/TheVar.css';

class TheVar extends Component {
    render () {
        return (
            <div>
                <h1 className="line-1 anim-var">The Var</h1>
                <img id="theVarPic"  src={('./images/newbar.jpeg')} />
            </div>
        )
    }
}

export default TheVar;
