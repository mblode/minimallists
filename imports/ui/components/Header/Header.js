import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "../Popover/Avatar";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">
                    Minimallists
                </Link>

                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <Avatar />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
