import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Icon from "../Base/Icon";

class ListItem extends Component {
    render() {
        return (
            <div className="sidebar-nav-item">
                <NavLink exact to={"/l/" + this.props.slug}>
                    <div className="sidebar-nav-link">
                        <Icon
                            name={this.props.icon}
                            color="#212529"
                            size="20px"
                        />
                        <span className="sidebar-nav-name">
                            {this.props.name}
                        </span>
                        <span className="sidebar-nav-length">1</span>
                    </div>
                </NavLink>
            </div>
        );
    }
}

ListItem = withRouter(ListItem);
export default ListItem;
