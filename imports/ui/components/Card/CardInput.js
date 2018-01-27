import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const updateCard = gql`
    mutation updateCard($name: String, $_id: String!) {
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
                    name: this.cardName.value,
                    _id: this.props.card._id
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        let input = (
            <span className="card-item-input card-item-span">
                {this.props.card.name}
            </span>
        );

        if (this.props.active === "open") {
            input = (
                <input
                    type="text"
                    placeholder="New To-Do"
                    ref={input => (this.cardName = input)}
                    onChange={this.updateName}
                    value={this.props.card.name}
                    className="card-item-input"
                />
            );
        } else if (this.props.card.name.length == 0) {
            input = (
                <span className="card-item-input card-item-span card-item-placeholder">
                    New To-Do
                </span>
            );
        }
        return <span>{input}</span>;
    }
}

export default graphql(updateCard, {
    name: "updateCard",
    options: {
        refetchQueries: ["listQuery"]
    }
})(CardInput);
