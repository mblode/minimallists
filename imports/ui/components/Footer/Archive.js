import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Icon from "../Base/Icon";

const deleteCard = gql`
    mutation deleteCard($_id: String!) {
        deleteCard(_id: $_id) {
            _id
        }
    }
`;

class Archive extends Component {
    deleteItem = () => {
        this.props
            .deleteCard({
                variables: {
                    _id: this.props.id
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
            <button
                onClick={this.deleteItem}
                className="btn btn-sm footer-button"
            >
                <Icon name="trash-2" color="#212529" size="16px" />
            </button>
        );
    }
}

export default graphql(deleteCard, { name: "deleteCard" })(Archive);
