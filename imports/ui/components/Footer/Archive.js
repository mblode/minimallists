import React, { Component } from "react";
import Icon from "../Base/Icon";

class Archive extends Component {
    render() {
        return (
            <button className="btn btn-sm footer-button">
                <Icon name="trash-2" color="#212529" size="16px" />
            </button>
        );
    }
}

export default Archive;
