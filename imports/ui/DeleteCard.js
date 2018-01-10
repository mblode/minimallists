import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const deleteCard = gql`
    mutation deleteCard($_id: String!) {
        deleteCard(_id: $_id) {
            _id
        }
    }
`;

class DeleteCard extends Component {
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
        return <button onClick={this.deleteItem}>X</button>;
    }
}

export default graphql(deleteCard, { name: "deleteCard" })(DeleteCard);
