import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const toggleCompleted = gql`
    mutation toggleCompleted($completed: Boolean, $_id: String!) {
        toggleCompleted(completed: $completed, _id: $_id) {
            completed
            _id
        }
    }
`;

class CardChecked extends Component {
    toggleCompleted = e => {
        this.props
            .toggleCompleted({
                variables: {
                    _id: this.props.card._id,
                    completed: this.completed
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
            <input
                className="card-item-check"
                type="checkbox"
                ref={input => (this.completed = input)}
                checked={this.props.card.completed}
                onChange={this.toggleCompleted()}
            />
        );
    }
}

export default graphql(toggleCompleted, { name: "toggleCompleted" })(
    CardChecked
);
