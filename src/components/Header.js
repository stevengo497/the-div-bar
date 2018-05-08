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
                      The div(e) bar
                    </Navbar.Brand>
                  </Navbar.Header>
                  <Nav>
                    <NavItem eventKey={1} href="#">
                      <Link to={"/"}>Home</Link>{" "}
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      <Link to={"/thevar"}>The Var</Link>{" "}
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      <Link to={"/boilerplates"}>Boilerplates</Link>{" "}
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      <Link to={"/opensource"}>Open Source</Link>{" "}
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      <Link to={"/contact"}>Contact</Link>{" "}
                    </NavItem>
                  </Nav>
                </Navbar>
            </header>
        )
    }
}

export default Header;
