import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import Icon from "../Base/Icon";

class InboxItem extends Component {
    render() {
        return (
            <div className="sidebar-nav-item">
                <NavLink exact to="/">
                    <div className="sidebar-nav-link">
                        <Icon name="inbox" color="#212529" size="20px" />
                        <span className="sidebar-nav-name">Inbox</span>
                        <span className="sidebar-nav-length">1</span>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default InboxItem;
