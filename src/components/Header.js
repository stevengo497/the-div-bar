import React, { Component} from 'react';
import { Link } from 'react-router-dom';
// import {Navbar, Nav, NavItem} from 'react-bootstrap';
import '../styling/Header.css';


class Header extends Component { // also the Navigation Bar
    render () {
        return (
            <navbar>

                    <div id="container">

                          <Link to={"/"} id="homepageLink">Homepage</Link>{" "}

                          <Link to={"/thevar"} id="theVarLink">The Var</Link>{" "}

                          <Link to={"/boilerplates"} id="foodMenuLink">Food Menu</Link>{" "}

                          <Link to={"/contact"} id="ContactLink">Contact</Link>{" "}

                          <Link to={"/readme"} id="readMeLink">Read Me</Link>{" "}
                     </div>

            </navbar>
        )
    }
}

export default Header;

// class Header extends Component { // also the Navigation Bar
//     render () {
//         return (
//             <header>
//                 <Navbar>
//                   <Navbar.Header>
//                     <Navbar.Brand>
//                       The &lt;div&gt; bar
//                   </Navbar.Brand>
//               </Navbar.Header>
//                   <Nav>
//                     <NavItem eventKey={1}>
//                       <Link to={"/"}>Home</Link>{" "}
//
//                     </NavItem>
//                     <NavItem eventKey={2}>
//                       <Link to={"/thevar"}>The Var</Link>{" "}
//
//                     </NavItem>
//                     <NavItem eventKey={3}>
//                       <Link to={"/boilerplates"}>Food Menu</Link>{" "}
//
//                     </NavItem>
//                     <NavItem eventKey={5}>
//                       <Link to={"/contact"}>Contact</Link>{" "}
//
//                     </NavItem>
//                   </Nav>
//               </Navbar>
//             </header>
//         )
//     }
// }
//
// export default Header;
