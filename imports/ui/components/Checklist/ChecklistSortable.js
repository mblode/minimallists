import React, { Component } from "react";
import { arrayMove } from "react-sortable-hoc";
import ChecklistList from "./ChecklistList";

class ChecklistSortable extends Component {
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            checklists: arrayMove(this.state.checklists, oldIndex, newIndex)
        });
    };

    render() {
        this.state = { checklists: this.props.checklists };

        return (
            <ChecklistList
                checklists={this.props.checklists}
                onSortEnd={this.onSortEnd}
                axis="y"
                lockAxis="y"
                useDragHandle={true}
            />
        );
    }
}

export default ChecklistSortable;
