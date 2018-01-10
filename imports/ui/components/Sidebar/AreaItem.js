import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import Icon from "../Base/Icon";

class AreaItem extends Component {
    render() {
        return (
            <div className="sidebar-nav-item">
                <NavLink to={"/a/new-project"}>
                    <div className="sidebar-nav-link">
                        <Icon name="package" color="#212529" size="20px" />
                        <input
                            type="text"
                            placeholder="New Area"
                            className="sidebar-input"
                        />
                        <span className="sidebar-nav-length">1</span>
                    </div>
                </NavLink>
            </div>
        );
    }
}

AreaItem = withRouter(AreaItem);
export default AreaItem;
