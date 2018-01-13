import React, { Component } from "react";
import { SortableElement } from "react-sortable-hoc";
import Card from "./Card";

class CardOuter extends Component {
    render() {
        return (
            <div>
                <Card
                    card={this.props.card}
                    index={this.props.index}
                    refetch={this.props.refetch}
                />
            </div>
        );
    }
}

export default SortableElement(CardOuter);
