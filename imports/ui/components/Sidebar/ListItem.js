import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import Icon from "../Base/Icon";

const updateList = gql`
    mutation updateList($name: String, $_id: String!) {
        updateList(name: $name, _id: $_id) {
            name
            _id
        }
    }
`;

const deleteList = gql`
    mutation deleteList($_id: String!) {
        deleteList(_id: $_id) {
            _id
        }
    }
`;

class ListItem extends Component {
    updateList = () => {
        this.props
            .updateList({
                variables: {
                    name: this.listName.value,
                    _id: this.props.list._id
                }
            })
            .then(({ data }) => {
                this.props.refetch();
            })
            .catch(error => {
                console.log(error);
            });
    };

    deleteList = () => {
        this.props
            .deleteList({
                variables: {
                    _id: this.props.list._id
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
                <NavLink exact to={"/l/" + this.props.list._id}>
                    <div className="sidebar-nav-link">
                        <Icon
                            name={this.props.icon}
                            color="#212529"
                            size="20px"
                        />
                        <input
                            type="text"
                            placeholder="New List"
                            ref={input => (this.listName = input)}
                            onChange={this.updateList}
                            value={this.props.list.name}
                            className="sidebar-nav-input"
                        />
                        <span className="sidebar-nav-length">
                            {this.props.length}
                        </span>

                        {/* <button type="button" onClick={this.deleteList}>
                            X
                        </button> */}
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default compose(
    graphql(updateList, { name: "updateList" }),
    graphql(deleteList, { name: "deleteList" })
)(ListItem);
