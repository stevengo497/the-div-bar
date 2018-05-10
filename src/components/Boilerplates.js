import React, { Component} from 'react';
import './Boilerplates.css';

class Boilerplates extends Component {
    render () {
        return (
            <div>
                <h1 className="line-1 anim-boilerplates">Boilerplates</h1>
                <img id="appetizer"  src={('./images/appetizer.jpeg')} />
                <img id="cheeseburger"  src={('./images/cheeseburger.jpeg')} />
            </div>
        )
    }
}

export default Boilerplates;
