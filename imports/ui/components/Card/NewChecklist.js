import React, { Component } from "react";
import Icon from "../Base/Icon";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const createChecklist = gql`
    mutation createChecklist($name: String!, $cardId: String!) {
        createChecklist(name: $name, cardId: $cardId) {
            _id
        }
    }
`;

class NewChecklist extends Component {
    createChecklist = () => {
        console.log("clicked");
        this.props
            .createChecklist({
                variables: {
                    name: "sdsdsdsd",
                    cardId: this.props.cardId
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <button
                className="btn btn-sm footer-button"
                onClick={() => this.createChecklist()}
            >
                <Icon name="list" color="#6c757d" size="16px" />
            </button>
        );
    }
}

export default graphql(createChecklist, {
    name: "createChecklist",
    options: {
        refetchQueries: ["listQuery"]
    }
})(NewChecklist);
