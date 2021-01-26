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

const MenuLink = (link: any) => {
    return (<>
        {console.log(link)}
        <Link to={link.link} className="nav-link">{link.text}</Link>
        </>
    )
}

const MenuBar = ({user, logout}: MenuBarProps) => {
    let history = useHistory();

    const onLogout = () => {
        logout();
        history.push("/")
    }
    const menuItems :Object= {
        "true": [{link: "/panel", text: "Panel"}, {link: "/logout", text: "Logout"}],
        "false": [{link: "/register", text: "Register"}, {link: "/login", text: "login"}]
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

                        <Link to="/feed" className="nav-link">Covid feed</Link>
                        <Link to="/news" className="nav-link">Covid news</Link>
                        <Link to="/shop" className="nav-link">Covid shop</Link>
                    </Nav>
                    <Nav>
                        {user && <><Link to="/panel" className="nav-link"> {user.credentials.role} panel</Link> <Nav.Link onClick={onLogout}>Logout</Nav.Link></>}
                        {!user && <><Link to="/login" className="nav-link">Login</Link><Link to="/register" className="nav-link">Register</Link></>}
                        {/*{user && <Link to="/panel" className="nav-link"> {user.credentials.role} panel</Link>}*/}
                        {/*{user ? <Nav.Link onClick={onLogout}>Logout</Nav.Link> :*/}
                        {/*    <Link to="/login" className="nav-link">Login</Link>}*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default MenuBar;