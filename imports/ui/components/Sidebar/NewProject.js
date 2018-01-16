import React, { Component } from "react";
import Icon from "../Base/Icon";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const createProject = gql`
    mutation createProject($name: String!) {
        createProject(name: $name) {
            _id
        }
    }
`;

class NewProject extends Component {
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
            <div className="sidebar-footer">
                <button
                    className="btn btn-sm btn-block sidebar-footer-btn"
                    onClick={() => this.newProject()}
                >
                    <Icon name="plus" color="#212529" size="16px" />
                    <span> New Project</span>
                </button>
            </div>
        );
    }
}

export default graphql(createProject, {
    name: "createProject",
    options: {
        refetchQueries: ["sidebarQuery"]
    }
})(NewProject);
