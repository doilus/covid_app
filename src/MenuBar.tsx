import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import React from "react";
import cov_logo from "./cov_logo.svg";
import {IUser} from "./Login/IUser";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

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
                <Link to="/" className="navbar-brand">Portal Covid</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                        <Link to="/feed">Covid feed</Link>
                        <Link to="/news">Covid news</Link>
                        <Link to="/shop">Covid shop</Link>
                    </Nav>
                    <Nav>
                        {user && <Link to="/panel"> {user.credentials.role} panel</Link>}
                        {user ? <Nav.Link onClick={onLogout}>Logout</Nav.Link> :
                            <Link to="/login">Login</Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default MenuBar;