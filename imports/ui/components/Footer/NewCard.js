import React, { Component } from "react";
import Icon from "../Base/Icon";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const createCard = gql`
    mutation createCard($name: String!) {
        createCard(name: $name) {
            _id
        }
    }
`;

class NewCard extends Component {
    newCard = () => {
        this.props
            .createCard({
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
            <button
                type="button"
                className="btn btn-sm footer-button"
                onClick={() => this.newCard()}
            >
                <Icon name="plus" color="#212529" size="16px" />
            </button>
        );
    }
}

export default graphql(createCard, { name: "createCard" })(NewCard);
