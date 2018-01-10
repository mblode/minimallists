import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const updateCard = gql`
    mutation updateCard($name: String!, $_id: String!) {
        updateCard(name: $name, _id: $_id) {
            name
            _id
        }
    }
`;

class CardInput extends Component {
    updateName = () => {
        this.props
            .updateCard({
                variables: {
                    name: this.name.value,
                    _id: this.props.card._id
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
                type="text"
                placeholder="New To-Do"
                ref={input => (this.name = input)}
                onChange={this.updateName}
                value={this.props.card.name}
                className="card-item-input"
            />
        );
    }
}

export default graphql(updateCard, { name: "updateCard" })(CardInput);
