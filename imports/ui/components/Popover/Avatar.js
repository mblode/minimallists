import React from "react";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    click() {
        this.setState({ active: !this.state.active });
    }

    render() {
        const email = "m.blode@gmail.com";
        const image = gravatarUrl(email);

        const username = "mblode";
        return (
            <div
                className={
                    this.state.active
                        ? "popover-menu popover-active"
                        : "popover-menu"
                }
                onClick={this.click.bind(this)}
            >
                <button className="popover-trigger">
                    <span className="btn btn-circular">
                        <span className="btn-content">
                            <div className="avatar">
                                <img
                                    src={image}
                                    className="avatar-image"
                                    alt={username}
                                />
                            </div>
                        </span>
                    </span>
                </button>

                <div className="popover-content popover-content-attach-right popover-content-position-below">
                    <nav role="menu" className="popover-content-menu">
                        <div className="popover-inner">
                            <div className="popover-content-scroller">
                                <h2 className="account-menu-title">
                                    <div className="account-menu-user-summary">
                                        <Link
                                            to="/profile"
                                            className="account-menu-user-summary__change-avatar btn btn-circular"
                                        >
                                            <span className="btn-content">
                                                <div className="avatar">
                                                    <img
                                                        src={image}
                                                        className="avatar-image"
                                                        alt={username}
                                                    />
                                                </div>
                                            </span>
                                        </Link>
                                        <div className="account-menu-user-summary__display-name">
                                            {username}
                                        </div>
                                    </div>
                                </h2>

                                <hr className="account-menu-separator" />

                                <Link
                                    to="/profile"
                                    className="account-menu-item"
                                >
                                    Profile
                                </Link>

                                <Link
                                    to="/settings"
                                    className="account-menu-item"
                                >
                                    Settings
                                </Link>

                                <div className="popover-hr" />

                                <a
                                    href=""
                                    className="account-menu-item"
                                    onClick={this.props.onClickSignOut}
                                >
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Avatar;
