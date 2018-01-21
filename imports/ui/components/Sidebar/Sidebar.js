import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import InboxItem from "./InboxItem";
import ListItem from "./ListItem";
import LogbookItem from "./LogbookItem";
import ProjectItem from "./ProjectItem";
import TrashItem from "./TrashItem";

import NewList from "./NewList";

class Sidebar extends Component {
    render() {
        const { loading, cards, projects, lists } = this.props;
        if (loading) return null;

        let listNodes = null;
        if (lists) {
            listNodes = lists.map((list, index) => {
                return (
                    <ListItem
                        list={list}
                        length={cards.length}
                        icon="inbox"
                        key={index}
                    />
                );
            });
        }

        let projectNodes = null;
        if (projects) {
            projectNodes = projects.map((project, index) => {
                return (
                    <ProjectItem
                        project={project}
                        length={cards.length}
                        icon="inbox"
                        key={index}
                    />
                );
            });
        }

        return (
            <nav className="sidebar-links">
                <InboxItem />

                <div className="mb-3" />

                {listNodes}

                <div className="mb-3" />

                <LogbookItem />
                <TrashItem />

                <div className="mb-3" />

                {projectNodes}

                <div className="mb-3" />

                <NewList />
            </nav>
        );
    }
}

const sidebarQuery = gql`
    query sidebarQuery {
        lists {
            _id
            name
        }
        projects {
            _id
            name
        }
        cards {
            _id
        }
    }
`;

export default graphql(sidebarQuery, {
    props: ({ data }) => ({ ...data })
})(Sidebar);
