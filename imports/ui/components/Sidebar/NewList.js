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

const createArea = gql`
    mutation createArea($name: String!) {
        createArea(name: $name) {
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
            .then(({ data }) => {
                this.props.refetch();
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
            .then(({ data }) => {
                this.props.refetch();
            })
            .catch(error => {
                console.log(error);
            });
    };

    newArea = () => {
        this.props
            .createArea({
                variables: {
                    name: ""
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
            <div className="col-12 col-md-3 col-xl-2 sidebar-footer">
                <Manager>
                    <Target>
                        <button
                            className="btn btn-sm btn-block sidebar-footer-btn"
                            onFocus={() => this.openPopover()}
                            onBlur={() => this.closePopover()}
                        >
                            <Icon name="plus" color="#212529" size="16px" />
                            <span> New List</span>
                        </button>
                    </Target>
                    <Popper
                        placement="top"
                        className={
                            this.state.active
                                ? "popover fade bs-popover-top show"
                                : "popover fade bs-popover-top"
                        }
                    >
                        <div className="popover-body">
                            <button
                                className="btn btn-sm btn-block sidebar-footer-btn"
                                onClick={() => this.newList()}
                            >
                                <Icon name="plus" color="#212529" size="16px" />
                                <span> New List</span>
                            </button>

                            <button
                                className="btn btn-sm btn-block sidebar-footer-btn"
                                onClick={() => this.newProject()}
                            >
                                <Icon
                                    name="folder"
                                    color="#212529"
                                    size="16px"
                                />
                                <span> New Project</span>
                            </button>

                            <button
                                className="btn btn-sm btn-block sidebar-footer-btn"
                                onClick={() => this.newArea()}
                            >
                                <Icon
                                    name="package"
                                    color="#212529"
                                    size="16px"
                                />
                                <span> New Area</span>
                            </button>
                        </div>
                        <Arrow className="arrow" />
                    </Popper>
                </Manager>
            </div>
        );
    }
}

export default compose(
    graphql(createList, { name: "createList" }),
    graphql(createProject, { name: "createProject" }),
    graphql(createArea, { name: "createArea" })
)(NewList);
