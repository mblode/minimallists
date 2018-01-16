import React, { Component } from "react";
import Icon from "../Base/Icon";
import { Manager, Target, Popper, Arrow } from "react-popper";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const createList = gql`
    mutation createList($name: String!) {
        createList(name: $name) {
            _id
        }
    }
`;

const createProject = gql`
    mutation createProject($name: String!) {
        createProject(name: $name) {
            _id
        }
    }
`;

class NewList extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    openPopover = () => {
        this.setState({ active: true });
    };

    closePopover = () => {
        this.setState({ active: false });
    };

    newList = () => {
        this.props
            .createList({
                variables: {
                    name: ""
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    newProject = () => {
        this.props
            .createProject({
                variables: {
                    name: ""
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="col-12 col-md-3 col-xl-2 sidebar-footer">
                <button
                    className="btn btn-sm btn-flex sidebar-footer-btn"
                    onClick={() => this.newList()}
                >
                    <Icon name="plus" color="#212529" size="16px" />
                    <span> New List</span>
                </button>
                <button
                    className="btn btn-sm btn-flex sidebar-footer-btn"
                    onClick={() => this.newProject()}
                >
                    <Icon name="folder" color="#212529" size="16px" />
                    <span> New Project</span>
                </button>
            </div>
        );
    }
}

export default compose(
    graphql(createList, {
        name: "createList",
        options: {
            refetchQueries: ["sidebarQuery"]
        }
    }),
    graphql(createProject, {
        name: "createProject",
        options: {
            refetchQueries: ["cardQuery"]
        }
    })
)(NewList);
