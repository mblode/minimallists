import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AreaItem from "./AreaItem";
import ListItem from "./ListItem";
import LogbookItem from "./LogbookItem";
import ProjectItem from "./ProjectItem";
import TrashItem from "./TrashItem";
import NewList from "./NewList";

// import logo from "../../assets/img/logo.png";

class Sidebar extends Component {
    render() {
        return (
            <nav className="sidebar-links">
                <ListItem slug="inbox" icon="inbox" name="Inbox" />
                <div className="mb-3" />

                <ListItem slug="today" icon="star" name="Today" />
                <ListItem slug="next" icon="chevrons-right" name="Next" />
                <ListItem slug="later" icon="layers" name="Later" />
                <ListItem slug="someday" icon="clock" name="Someday" />
                <div className="mb-3" />

                <LogbookItem />
                <TrashItem />
                <div className="mb-3" />

                <ProjectItem />
                <AreaItem />
                <NewList />
            </nav>
        );
    }
}

Sidebar = withRouter(Sidebar);
export default Sidebar;
