import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink, withRouter } from "react-router-dom";
import CurrentStore from "../../stores/CurrentStore";
import Avatar from "../Popover/Avatar";

class Header extends Component {
    render() {
        let navigation = null;

        if (this.props.noNav) {
            navigation = null;
        } else if (!this.props.user) {
            navigation = (
                <ul className="nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact to="/signin" className="nav-link">
                            <span>Sign in</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/signup" className="nav-link">
                            <span>Sign Up</span>
                        </NavLink>
                    </li>
                </ul>
            );
        } else if (this.props.user._id) {
            navigation = (
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <Avatar
                            client={this.props.client}
                            email={this.props.user.email}
                        />
                    </li>
                </ul>
            );
        }

        return (
            <nav className="navbar navbar-light">
                <Link
                    to="/"
                    className={
                        "navbar-brand " + (this.props.noNav ? "mx-auto" : "")
                    }
                >
                    Minimallists
                </Link>

                {navigation}
            </nav>
        );
    }
}

export default Header;
