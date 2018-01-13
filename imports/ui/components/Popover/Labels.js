import React from "react";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";

class AvatarDropdown extends React.Component {
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
                        <div className="popover-inner">{labelNodes}</div>
                    </nav>
                </div>
            </div>
        );
    }
}

const labelQuery = gql`
    {
        labels {
            _id
            name
        }
    }
`;

export default graphql(labelQuery)(Labels);
