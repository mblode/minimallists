import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Manager, Target, Popper, Arrow } from "react-popper";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Icon from "../Base/Icon";

const deleteProject = gql`
    mutation deleteProject($_id: String!) {
        deleteProject(_id: $_id) {
            _id
        }
    }
`;

class DeleteProject extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false, fireRedirect: false };
    }

    openPopover = () => {
        this.setState({ active: true });
    };

    closePopover = () => {
        this.setState({ active: false });
    };

    deleteProject = () => {
        this.props
            .deleteProject({
                variables: {
                    _id: this.props.currentStore.cur.projectId
                }
            })
            .then(this.setState({ fireRedirect: true }))
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { fireRedirect } = this.state;

        return (
            <Manager>
                <Target>
                    <button
                        className="btn btn-link"
                        onFocus={() => this.openPopover()}
                        onBlur={() => this.closePopover()}
                    >
                        <Icon
                            name="more-vertical"
                            color="#6c757d"
                            size="16px"
                        />
                    </button>
                </Target>
                <Popper
                    placement="bottom"
                    className={
                        this.state.active
                            ? "popover fade bs-popover-bottom show"
                            : "popover fade bs-popover-bottom"
                    }
                >
                    <div className="popover-body">
                        <button
                            className="btn btn-link"
                            type="button"
                            onClick={this.deleteProject}
                        >
                            X
                        </button>
                    </div>
                    <Arrow className="arrow" />
                </Popper>

                {fireRedirect && <Redirect to="/" />}
            </Manager>
        );
    }
}

export default graphql(deleteProject, {
    name: "deleteProject",
    options: {
        refetchQueries: ["sidebarQuery"]
    }
})(DeleteProject);
