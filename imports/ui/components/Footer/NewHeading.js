import React, { Component } from "react";
import Icon from "../Base/Icon";

class NewCard extends Component {
    render() {
        const icon = <Icon name="plus-square" color="#212529" size="16px" />;
        let button = null;

        if (this.props.buttonState === "visible") {
            button = (
                <button type="button" className="btn btn-sm footer-button">
                    {icon}
                </button>
            );
        } else if (this.props.buttonState === "disabled") {
            button = (
                <button
                    type="button"
                    className="btn btn-sm footer-button"
                    disabled
                >
                    {icon}
                </button>
            );
        }

        return <span>{button}</span>;
    }
}

export default NewCard;
