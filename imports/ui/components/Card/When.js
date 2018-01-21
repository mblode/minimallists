import React, { Component } from "react";
import Icon from "../Base/Icon";
import { Manager, Target, Popper, Arrow } from "react-popper";

class When extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    openPopover = () => {
        this.setState({ active: true });
    };

    closePopover = () => {
        this.setState({ active: false });
    };

    render() {
        return (
            <Manager>
                <Target>
                    <button
                        onFocus={() => this.openPopover()}
                        onBlur={() => this.closePopover()}
                        className="btn btn-sm footer-button"
                    >
                        <Icon name="calendar" color="#6c757d" size="16px" />
                    </button>
                </Target>
                <Popper
                    placement="bottom"
                    className={
                        this.state.active
                            ? "popover fade bs-popover-bottom show"
                            : "popover fade bs-popover-bottom"
                    }
                >
                    <div className="popover-body">
                        <h1>Hello</h1>
                    </div>
                    <Arrow className="arrow" />
                </Popper>
            </Manager>
        );
    }
}

export default When;
