import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Header.css';

class Header extends Component { // also the Navigation Bar
    render () {
        return (
            <header>
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      The &lt;div&gt; bar
                    </Navbar.Brand>
                  </Navbar.Header>
                  <Nav>
                    <NavItem to={"/"} eventKey={1}> 
                      <Link to={"/"}>Home</Link>{" "}

                    </NavItem>
                    <NavItem to={"/thevar"} eventKey={2}>
                      <Link to={"/thevar"}>The Var</Link>{" "}

                    </NavItem>
                    <NavItem to={"/boilerplates"} eventKey={3}>
                      <Link to={"/boilerplates"}>Boilerplates</Link>{" "}

                    </NavItem>
                    <NavItem to={"/opensource"} eventKey={4}>
                      <Link to={"/opensource"}>Open Source</Link>{" "}

                    </NavItem>
                    <NavItem to={"/contact"} eventKey={5}>
                      <Link to={"/contact"}>Contact</Link>{" "}
                    </NavItem>
                  </Nav>
                </Navbar>
            </header>
        )
    }
}

export default Header;
