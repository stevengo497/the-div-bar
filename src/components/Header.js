import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header>
                <Link to={"/"}>Home</Link>{" "}
                <Link to={"/drinks"}>Drink Menu</Link>{" "}
                <Link to={"/food"}>Food Menu</Link>{" "}
                <Link to={"/contribute"}>Contribute</Link>{" "}
            </header>
        )
    }
}

export default Header;
