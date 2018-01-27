import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const updateCardCompleted = gql`
    mutation updateCardCompleted($completed: Boolean!, $_id: String!) {
        updateCardCompleted(completed: $completed, _id: $_id) {
            completed
            _id
        }
    }
`;

class CardChecked extends Component {
    updateCard = () => {
        this.props
            .updateCardCompleted({
                variables: {
                    completed: !this.props.card.completed,
                    _id: this.props.card._id
                }
            })
            .catch(error => {
                console.log(error);
            });
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
