import React, { Component } from "react";

import Icon from "../components/Base/Icon";

class Profile extends Component {
    render() {
        return (
            <div className="page">
                <h3 className="list-title">
                    <Icon name="user" color="#212529" />
                    Profile
                </h3>
            </div>
        );
    }
}

export default Profile;
