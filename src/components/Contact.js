import React, {Component} from 'react';
import '../styling/Contact.css';
import { Formio } from 'react-formio';

class Contact extends Component {
    render () {
        return (
            <div>
                <h1 className="line-1 anim-contact">&lt; Contact Us /&gt;</h1>

                <div id="formio"></div>
            </div>
        )
    }
}

export default Contact;
