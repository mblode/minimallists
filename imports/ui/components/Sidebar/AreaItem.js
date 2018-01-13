import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import Icon from "../Base/Icon";

const updateArea = gql`
    mutation updateArea($name: String, $_id: String!) {
        updateArea(name: $name, _id: $_id) {
            name
            _id
        }
    }
`;

const deleteArea = gql`
    mutation deleteArea($_id: String!) {
        deleteArea(_id: $_id) {
            _id
        }
    }
`;

class AreaItem extends Component {
    updateArea = () => {
        this.props
            .updateArea({
                variables: {
                    name: this.areaName.value,
                    _id: this.props.area._id
                }
            })
            .then(({ data }) => {
                this.props.refetch();
            })
            .catch(error => {
                console.log(error);
            });
    };

    deleteArea = () => {
        this.props
            .deleteArea({
                variables: {
                    _id: this.props.area._id
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
                <NavLink exact to={"/a/" + this.props.area._id}>
                    <div className="sidebar-nav-link">
                        <Icon name="package" color="#212529" size="20px" />
                        <input
                            type="text"
                            placeholder="New Area"
                            ref={input => (this.areaName = input)}
                            onChange={this.updateArea}
                            value={this.props.area.name}
                            className="sidebar-nav-input"
                        />
                        <span className="sidebar-nav-length">
                            {this.props.length}
                        </span>

                        <button type="button" onClick={this.deleteArea}>
                            X
                        </button>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default compose(
    graphql(updateArea, { name: "updateArea" }),
    graphql(deleteArea, { name: "deleteArea" })
)(AreaItem);
