import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import Icon from "../Base/Icon";

const updateProject = gql`
    mutation updateProject($name: String, $_id: String!) {
        updateProject(name: $name, _id: $_id) {
            name
            _id
        }
    }
`;

const deleteProject = gql`
    mutation deleteProject($_id: String!) {
        deleteProject(_id: $_id) {
            _id
        }
    }
`;

class ProjectItem extends Component {
    updateProject = () => {
        this.props
            .updateProject({
                variables: {
                    name: this.projectName.value,
                    _id: this.props.project._id
                }
            })
            .then(({ data }) => {
                this.props.refetch();
            })
            .catch(error => {
                console.log(error);
            });
    };

    deleteProject = () => {
        this.props
            .deleteProject({
                variables: {
                    _id: this.props.project._id
                }
            })
            .then(({ data }) => {
                this.props.refetch();
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="sidebar-nav-item">
                <NavLink exact to={"/p/" + this.props.project._id}>
                    <div className="sidebar-nav-link">
                        <Icon name="folder" color="#212529" size="20px" />
                        <input
                            type="text"
                            placeholder="New Project"
                            ref={input => (this.projectName = input)}
                            onChange={this.updateProject}
                            value={this.props.project.name}
                            className="sidebar-nav-input"
                        />
                        <span className="sidebar-nav-length">
                            {this.props.length}
                        </span>

                        <button type="button" onClick={this.deleteProject}>
                            X
                        </button>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default compose(
    graphql(updateProject, { name: "updateProject" }),
    graphql(deleteProject, { name: "deleteProject" })
)(ProjectItem);
