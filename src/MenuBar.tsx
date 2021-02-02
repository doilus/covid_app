import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import React from "react";
import cov_logo from "./cov_logo.svg";
import {RiShoppingBasketLine} from "react-icons/all";

class MenuBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                    <Navbar.Brand>
                        <img src={cov_logo} width="40" height="40"></img>
                    </Navbar.Brand>
                    <Navbar.Brand href="/">Portal Covid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="feed">Covid feed</Nav.Link>
                            <Nav.Link href="news">Covid news</Nav.Link>
                            <Nav.Link href="shop">Covid shop</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="login">Login</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="mybasket"><RiShoppingBasketLine/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MenuBar;