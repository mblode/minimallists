import React, { Component } from "react";
import Icon from "../Base/Icon";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const createList = gql`
    mutation createList($name: String!) {
        createList(name: $name) {
            _id
        }
    }
`;

class NewList extends Component {
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

    render() {
        return (
            <div className="sidebar-footer">
                <button
                    className="btn btn-sm btn-block sidebar-footer-btn"
                    onClick={() => this.newList()}
                >
                    <Icon name="plus" color="#212529" size="16px" />
                    <span> New List</span>
                </button>
            </div>
        );
    }
}

export default graphql(createList, { name: "createList" })(NewList);
