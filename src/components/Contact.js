import React, {Component} from 'react';
import './Contact.css';


class Contact extends Component {
    render () {
        return (
            <div>
                <h1 class="line-1 anim-contact">Contact Us</h1>
                <div id="formio"></div>
                <img id="contactPic" src={('./images/relax.jpg')} />
            </div>
        )
    }
}

export default Contact;
