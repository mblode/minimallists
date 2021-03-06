import React, { Component } from "react";
import Icon from "../Base/Icon";

class When extends Component {
    render() {
        return (
            <button
                onClick={() => this.setState({ showModal: true })}
                className="btn btn-sm footer-button"
            >
                <Icon name="tag" color="#6c757d" size="16px" />
            </button>
        );
    }
}

export default When;
