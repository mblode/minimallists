import React, { Component } from "react";
import { arrayMove } from "react-sortable-hoc";
import CardList from "./CardList";

class CardSortable extends Component {
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            cards: arrayMove(this.props.cards, oldIndex, newIndex)
        });
    };

    render() {
        this.state = { cards: this.props.cards };

        return (
            <div>
                <CardList
                    cards={this.state.cards}
                    onSortEnd={this.onSortEnd}
                    refetch={this.props.refetch}
                />
            </div>
        );
    }
}

export default CardSortable;
