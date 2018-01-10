import React, { Component } from "react";
import Icon from "../Base/Icon";

class Move extends Component {
    render() {
        return (
            <button className="btn btn-sm footer-button">
                <Icon name="arrow-right" color="#212529" size="16px" />
            </button>
        );
    }
}

export default Move;
