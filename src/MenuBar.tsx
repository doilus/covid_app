import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import React from "react";
import cov_logo from "./cov_logo.svg";
import {RiShoppingBasketLine} from "react-icons/all";
import {IUser} from "./components/Login/IUser";
import {Link} from "react-router-dom";
import './style.css';

type MenuBarProps = {
    user: IUser | undefined,
    logout: () => void
}

export default class MenuBar extends React.Component<MenuBarProps> {
    constructor(props: MenuBarProps) {
        super(props);
    }

    onLogout = () => {
        this.props.logout();
        // useHistory().push("/")
    }

    render() {


        // @ts-ignore
        return (
<body>
            <div>
                <div className="backgroundimg">
                    <div className="menu">
                            {/* <Nav > */}
                                <div className="option-header">
                                    <Nav.Link href="news"><div className="option-header-inner">COVID NEWS</div></Nav.Link>
                                </div>
                                <div className="option-header">
                                    <Nav.Link href="shop"><div className="option-header-inner">COVID SHOPS</div></Nav.Link>
                                </div>
                                <div className="option-header">
                                    <Nav.Link href="medicalcheck"><div className="option-header-inner">UMÓW WIZYTĘ</div></Nav.Link>
                                </div>

                            {/* </Nav> */}
                        

                        <div className="main-header">
                            <Navbar.Brand href="/" >
                                <div className="main-header-inner">PORTAL COVID</div>
                            </Navbar.Brand>
                        </div>

                        {/* <Nav> */}
                        
                            {this.props.user && <><Link to="/panel" className="nav-link"> {this.props.user.credentials.role} panel</Link>
                                <Nav.Link onClick={this.onLogout}>Logout</Nav.Link></>}
                            
							{!this.props.user && <><Link to="/login" className="nav-link"><div className="option-header-inner">ZALOGUJ SIĘ</div></Link>
							<Link to="/register" className="nav-link"><div className="option-header-inner">ZAREJESTRUJ SIĘ</div></Link></>}
							
                            <div className="option-header">
                                    <Nav.Link href="editdata"><div className="option-header-inner">EDYTUJ DANE</div></Nav.Link>
                            </div>

                        {/* </Nav> */}
                        {/* <Nav> */}
                            <div className="option-header">
                                <Nav.Link href="mybasket"><div className="option-header-inner"></div><RiShoppingBasketLine/></Nav.Link>
                            </div>
                        {/* </Nav> */}



                    </div>
                </div>
            </div>
        </body>
        );
    }
}

