import React, { Component } from "react";
import Icon from "../Base/Icon";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const createArea = gql`
    mutation createArea($name: String!) {
        createArea(name: $name) {
            _id
        }
    }
`;

class NewArea extends Component {
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
            <div className="sidebar-footer">
                <button
                    className="btn btn-sm btn-block sidebar-footer-btn"
                    onClick={() => this.newArea()}
                >
                    <Icon name="plus" color="#212529" size="16px" />
                    <span> New Area</span>
                </button>
            </div>
        );
    }
}

export default graphql(createArea, { name: "createArea" })(NewArea);
