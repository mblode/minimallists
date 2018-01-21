import React, { Component } from "react";
import Icon from "../Base/Icon";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import CurrentStore from "../../stores/CurrentStore";

const createCard = gql`
    mutation createCard($listId: String, $name: String!) {
        createCard(listId: $listId, name: $name) {
            _id
        }
    }
`;

class NewCard extends Component {
    newCard = () => {
        this.props
            .createCard({
                variables: {
                    name: "",
                    listId: CurrentStore.cur.listId
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const icon = <Icon name="plus" color="#212529" size="16px" />;
        let button = (
            <button
                type="button"
                className="btn btn-sm footer-button"
                onClick={() => this.newCard()}
            >
                {icon}
            </button>
        );

        if (this.props.buttonState === "disabled") {
            button = (
                <button
                    type="button"
                    className="btn btn-sm footer-button"
                    disabled
                >
                    {icon}
                </button>
            );
        }

        return <span>{button}</span>;
    }
}

export default graphql(createCard, {
    name: "createCard",
    options: {
        refetchQueries: ["cardQuery"]
    }
})(NewCard);
