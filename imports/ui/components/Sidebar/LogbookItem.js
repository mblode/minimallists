import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import Icon from "../Base/Icon";

class LogbookItem extends Component {
    render() {
        return (
            <div className="sidebar-nav-item">
                <NavLink to="/logbook">
                    <div className="sidebar-nav-link">
                        <Icon name="book" color="#212529" size="20px" />
                        <span className="sidebar-nav-name">Logbook</span>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default LogbookItem;
