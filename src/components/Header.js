import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component { // also the Navigation Bar
    render () {
        return (
            <header>
                <Link to={"/"}>Home</Link>{" "}
                <Link to={"/thevar"}>The Var</Link>{" "}
                <Link to={"/boilerplates"}>Boilerplates</Link>{" "}
                <Link to={"/opensource"}>Open Source</Link>{" "}
                <Link to={"/contact"}>Contact</Link>{" "}
            </header>
        )
    }
}

export default Header;
