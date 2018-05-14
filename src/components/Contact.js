import React, {Component} from 'react';
import '../styling/Contact.css';
import { Formio } from 'react-formio';
import { Button } from 'react-bootstrap';

class Contact extends Component {
    handleClick() {
        window.location.reload();
}
    render () {
        return (
            <div id="contactUsContainer">
                <h1 className="line-1 anim-contact">&lt;<span>contactUs</span>/&gt;</h1>
                    <div >
                        <h1 id="contactBtn" onClick={this.handleClick}>&#60;!&#45;&#45;Click here to contact us&#45;&#45;&#62;</h1>
                    </div>
                <div id="formio"></div>
            </div>
        )
    }
}

export default Contact;
