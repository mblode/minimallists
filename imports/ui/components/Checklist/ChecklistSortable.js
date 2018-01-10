import React, { Component } from "react";
import { arrayMove } from "react-sortable-hoc";
import ChecklistList from "./ChecklistList";

class ChecklistSortable extends Component {
    state = {
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    };
    render() {
        return (
            <ChecklistList
                items={this.state.items}
                onSortEnd={this.onSortEnd}
                axis="y"
                lockAxis="y"
                useDragHandle={true}
            />
        );
    }
}

export default ChecklistSortable;
