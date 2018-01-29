import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Manager, Target, Popper, Arrow } from "react-popper";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Icon from "../Base/Icon";

const deleteList = gql`
    mutation deleteList($_id: String!) {
        deleteList(_id: $_id) {
            _id
        }
    }
`;

class Popover extends Component {
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

    deleteList = () => {
        this.props
            .deleteList({
                variables: {
                    _id: this.props.currentStore.cur.listId
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
                        className="btn"
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
                            className="btn"
                            type="button"
                            onClick={this.deleteList}
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

export default graphql(deleteList, {
    name: "deleteList",
    options: {
        refetchQueries: ["sidebarQuery"]
    }
})(Popover);
