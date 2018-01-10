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
    constructor(props) {
        super(props);
        this.currentCard = this.currentCard.bind(this);
    }

    newCard = () => {
        this.props
            .createCard({
                variables: {
                    name: ""
                }
            })
            .then(({ data }) => {
                this.props.refetch();
                this.currentCard(card.id);
            })
            .catch(error => {
                console.log(error);
            });
    };

    currentCard = id => {
        // let val = CardStore.cards.filter(card => {
        //     return card.id === id;
        // });
        // this.props.currentStore.currentCard(val[0]);
        this.props.currentStore.currentActive("open");
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
