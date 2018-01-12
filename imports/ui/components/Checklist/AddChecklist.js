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

class AddChecklist extends Component {
    submitForm = () => {
        this.props
            .createChecklist({
                variables: {
                    cardId: this.props.card._id,
                    name: this.checklistName.value
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
            <div>
                <input
                    type="text"
                    ref={input => (this.checklistName = input)}
                />
                <button onClick={this.submitForm} placeholder="New Checklist">
                    Submit
                </button>
            </div>
        );
    }
}

export default graphql(createChecklist, { name: "createChecklist" })(
    AddChecklist
);
