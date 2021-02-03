import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import React from "react";
import cov_logo from "./cov_logo.svg";
import {RiShoppingBasketLine} from "react-icons/all";
import {IUser} from "./components/Login/IUser";
import {Link, useHistory} from "react-router-dom";


type MenuBarProps = {
    user: IUser | undefined,
    logout: () => void
}


const MenuBar = ({user, logout}: MenuBarProps) => {


    let history = useHistory();


    const onLogout = () => {
        logout();
        history.push("/")
    }
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
                        <Nav.Link href="medicalcheck"> Zapis na badania</Nav.Link>
                        {user && <><Link to="/panel" className="nav-link"> {user.credentials.role} panel</Link>
                            <Nav.Link onClick={onLogout}>Logout</Nav.Link></>}
                        {!user && <><Link to="/login" className="nav-link">Login</Link><Link to="/register"
                                                                                             className="nav-link">Register</Link></>}
                    </Nav>
                    <Nav>
                        <Nav.Link href="mybasket"><RiShoppingBasketLine/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default MenuBar;