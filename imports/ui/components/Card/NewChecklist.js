import React, { Component } from "react";
import Icon from "../Base/Icon";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const createChecklist = gql`
    mutation createChecklist($cardId: String, $name: String!) {
        createChecklist(cardId: $cardId, name: $name) {
            _id
        }
    }
`;

class NewChecklist extends Component {
    createChecklist = () => {
        this.props
            .createChecklist({
                variables: {
                    cardId: this.props.card._id,
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
                onClick={this.createChecklist}
                className="btn btn-sm footer-button"
            >
                <Icon name="list" color="#6c757d" size="16px" />
            </button>
        );
    }
}

export default graphql(createChecklist, { name: "createChecklist" })(
    NewChecklist
);
