import React, { Component } from "react";
import { SortableElement, SortableHandle } from "react-sortable-hoc";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const DragHandle = SortableHandle(() => <span>::</span>);

const updateChecklistName = gql`
    mutation updateChecklistName($name: String!, $_id: String!) {
        updateChecklistName(name: $name, _id: $_id) {
            _id
        }
    }
`;

const updateChecklistCompleted = gql`
    mutation updateChecklistCompleted($completed: Boolean!, $_id: String!) {
        updateChecklistCompleted(completed: $completed, _id: $_id) {
            completed
            _id
        }
    }
`;

class Checklist extends Component {
    updateChecklistCompleted = e => {
        this.props
            .updateChecklistCompleted({
                variables: {
                    completed: !this.props.checklist.completed,
                    _id: this.props.checklist._id
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    updateChecklistName = e => {
        this.props
            .updateChecklistName({
                variables: {
                    name: this.checklistName.value,
                    _id: this.props.checklist._id
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { checklist } = this.props;

        return (
            <div className="checklist-item">
                <div className="checklist-item-main">
                    <input
                        className="checklist-item-check"
                        type="checkbox"
                        defaultChecked={checklist.completed}
                        onChange={this.updateChecklistCompleted}
                    />

                    <input
                        type="text"
                        placeholder="New Checklist"
                        ref={input => (this.checklistName = input)}
                        onChange={this.updateChecklistName}
                        value={checklist.name}
                        className="checklist-item-input"
                    />

                    <DragHandle />
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(updateChecklistCompleted, {
        name: "updateChecklistCompleted",
        options: {
            refetchQueries: ["listQuery"]
        }
    }),
    graphql(updateChecklistName, {
        name: "updateChecklistName",
        options: {
            refetchQueries: ["listQuery"]
        }
    })
)(SortableElement(Checklist));
