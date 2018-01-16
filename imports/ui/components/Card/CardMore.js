import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Textarea from "../Base/ExpandingTextarea";
import ChecklistList from "../Checklist/ChecklistList";
import When from "./When";
import Labels from "./Labels";
import NewChecklist from "./NewChecklist";
import Deadline from "./Deadline";

const updateCardNotes = gql`
    mutation updateCardNotes($notes: String, $_id: String!) {
        updateCardNotes(notes: $notes, _id: $_id) {
            notes
            _id
        }
    }
`;

class CardMore extends Component {
    updateNotes = e => {
        this.props
            .updateCardNotes({
                variables: {
                    notes: e.target.value,
                    _id: this.props.card._id
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="card-item-more">
                <Textarea
                    rows="3"
                    maxLength="3000"
                    placeholder="Notes"
                    className="card-item-notes"
                    onChange={this.updateNotes}
                    value={this.props.card.notes}
                />
                <ChecklistList checklists={this.props.card.checklists} />

                <When />
                {/* <Labels /> */}
                <NewChecklist card={this.props.card} />
                <Deadline />
            </div>
        );
    }
}

export default graphql(updateCardNotes, {
    name: "updateCardNotes",
    options: {
        refetchQueries: ["cardQuery"]
    }
})(CardMore);
