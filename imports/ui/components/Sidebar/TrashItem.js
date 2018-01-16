import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Icon from "../Base/Icon";

class TrashItem extends Component {
    render() {
        return (
            <div className="sidebar-nav-item">
                <NavLink to="/trash">
                    <div className="sidebar-nav-link">
                        <Icon name="trash-2" color="#212529" size="20px" />
                        <span className="sidebar-nav-name">Trash</span>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default TrashItem;
