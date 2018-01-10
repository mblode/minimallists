import React, { Component } from "react";
import Icon from "../Base/Icon";

class NewCard extends Component {
    render() {
        return (
            <button
                className="btn btn-sm footer-button"
                onClick={() => this.newCard()}
            >
                <Icon name="plus-square" color="#212529" size="16px" />
            </button>
        );
    }
}

export default NewCard;
