import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const updateCardCompleted = gql`
    mutation updateCardCompleted($_id: String!, $completed: Boolean!) {
        updateCardCompleted(_id: $_id, completed: $completed) {
            completed
            _id
        }
    }
`;

class CardChecked extends Component {
    updateCard = () => {
        setTimeout(() => {
            this.props
                .updateCardCompleted({
                    variables: {
                        _id: this.props.card._id,
                        completed: !this.props.card.completed
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }, 3000);
    };

    render() {
        return (
            <input
                className="card-item-check"
                type="checkbox"
                defaultChecked={this.props.card.completed}
                onChange={this.updateCard}
            />
        );
    }
}

export default graphql(updateCardCompleted, {
    name: "updateCardCompleted",
    options: {
        refetchQueries: ["listQuery"]
    }
})(CardChecked);
