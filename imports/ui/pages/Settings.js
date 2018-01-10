import React, { Component } from "react";

import Icon from "../components/Base/Icon";

class Settings extends Component {
    render() {
        return (
            <div className="page">
                <h3 className="list-title">
                    <Icon name="settings" color="#212529" />
                    Settings
                </h3>
            </div>
        );
    }
}

export default Settings;
