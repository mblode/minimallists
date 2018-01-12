import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import AreaItem from "./AreaItem";
import ListItem from "./ListItem";
import LogbookItem from "./LogbookItem";
import ProjectItem from "./ProjectItem";
import TrashItem from "./TrashItem";

import NewArea from "./NewArea";
import NewProject from "./NewProject";
import NewList from "./NewList";

class Sidebar extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;

        let listNodes = null;
        if (data.lists) {
            listNodes = data.lists.map((list, index) => {
                return (
                    <ListItem
                        list={list}
                        length={data.cards.length}
                        refetch={data.refetch}
                        icon="inbox"
                        key={index}
                    />
                );
            });
        }

        let projectNodes = null;
        if (data.projects) {
            projectNodes = data.projects.map((project, index) => {
                return (
                    <ProjectItem
                        project={project}
                        length={data.cards.length}
                        refetch={data.refetch}
                        icon="inbox"
                        key={index}
                    />
                );
            });
        }

        let areaNodes = null;
        if (data.areas) {
            areaNodes = data.areas.map((area, index) => {
                return (
                    <AreaItem
                        area={area}
                        length={data.cards.length}
                        refetch={data.refetch}
                        icon="inbox"
                        key={index}
                    />
                );
            });
        }

        return (
            <nav className="sidebar-links">
                {listNodes}
                <div className="mb-3" />

                {projectNodes}
                <div className="mb-3" />

                {areaNodes}
                <div className="mb-3" />

                <NewList refetch={data.refetch} />
                <NewProject refetch={data.refetch} />
                <NewArea refetch={data.refetch} />
            </nav>
        );
    }
}

const sidebarQuery = gql`
    {
        lists {
            _id
            name
        }
        projects {
            _id
            name
        }
        areas {
            _id
            name
        }
        cards {
            _id
        }
    }
`;

Sidebar = withRouter(Sidebar);
export default graphql(sidebarQuery)(Sidebar);
