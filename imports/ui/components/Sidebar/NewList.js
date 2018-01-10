import React, { Component } from "react";
import Icon from "../Base/Icon";

class NewList extends Component {
    render() {
        return (
            <div className="sidebar-footer">
                <button className="btn btn-sm btn-block sidebar-footer-btn">
                    <Icon name="plus" color="#212529" size="16px" />
                    <span> New List</span>
                </button>
            </div>
        );
    }
}

export default NewList;
