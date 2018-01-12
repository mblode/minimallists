import React, { Component } from "react";
import Icon from "../Base/Icon";

class Move extends Component {
    render() {
        const icon = <Icon name="arrow-right" color="#212529" size="16px" />;
        let button = (
            <button type="button" className="btn btn-sm footer-button">
                {icon}
            </button>
        );

        if (this.props.buttonState === "disabled") {
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

export default Move;
