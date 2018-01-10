import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const createCard = gql`
    mutation createCard($name: String!) {
        createCard(name: $name) {
            _id
        }
    }
`;

class AddCard extends Component {
    submitForm = e => {
        e.preventDefault();
        this.props
            .createCard({
                variables: {
                    name: this.name.value
                }
            })
            .then(({ data }) => {
                this.props.refetch();
            })
            .catch(error => {
                console.log(error);
            });
        this.name.value = "";
    };
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    type="text"
                    ref={input => (this.name = input)}
                    placeholder="New to-do"
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default graphql(createCard, { name: "createCard" })(AddCard);
