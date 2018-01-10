import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import Icon from "../Base/Icon";

class ProjectItem extends Component {
    render() {
        return (
            <div className="sidebar-nav-item">
                <NavLink to={"/p/new-project"}>
                    <div className="sidebar-nav-link">
                        <Icon name="folder" color="#212529" size="20px" />
                        <input
                            type="text"
                            placeholder="New Project"
                            className="sidebar-input"
                        />
                        <span className="sidebar-nav-length">1</span>
                    </div>
                </NavLink>
            </div>
        );
    }
}

ProjectItem = withRouter(ProjectItem);
export default ProjectItem;
