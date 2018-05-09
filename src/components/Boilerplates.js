import React, { Component} from 'react';
import './Boilerplates.css';

class Boilerplates extends Component {
    render () {
        return (
            <div>
                <img id="barfood"  src={('./images/barfood.jpeg')} />
                <br/>
                <img id="appetizer"  src={('./images/appetizer.jpeg')} />
                <img id="cheeseburger"  src={('./images/cheeseburger.jpeg')} />
            </div>
        )
    }
}

export default Boilerplates;
