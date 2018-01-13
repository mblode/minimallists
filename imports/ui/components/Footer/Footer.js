import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

import CurrentStore from "../../stores/CurrentStore";

import Archive from "./Archive";
import Move from "./Move";
import NewCard from "./NewCard";
import NewHeading from "./NewHeading";
import QuickFind from "./QuickFind";
import When from "./When";

@observer
class Footer extends Component {
    render() {
        let footerMain = null;

        if (CurrentStore.cur.active === "close") {
            footerMain = (
                <div>
                    <NewCard
                        currentStore={CurrentStore}
                        refetch={this.props.refetch}
                        buttonState={this.props.newCard}
                    />
                    <When buttonState="disabled" />
                    <Move buttonState="disabled" />
                    <QuickFind />
                </div>
            );
        } else if (CurrentStore.cur.active === "click") {
            footerMain = (
                <div>
                    <NewCard
                        currentStore={CurrentStore}
                        refetch={this.props.refetch}
                        buttonState={this.props.newCard}
                    />
                    <When
                        currentStore={CurrentStore}
                        buttonState={this.props.when}
                    />
                    <Move
                        currentStore={CurrentStore}
                        buttonState={this.props.move}
                    />
                    <QuickFind />
                </div>
            );
        } else if (CurrentStore.cur.active === "open") {
            footerMain = (
                <div>
                    <Move
                        currentStore={CurrentStore}
                        buttonState={this.props.move}
                    />
                    <Archive
                        currentStore={CurrentStore}
                        refetch={this.props.refetch}
                        buttonState={this.props.archive}
                    />
                </div>
            );
        }

        return (
            <footer className="col-12 col-md-9 col-xl-10 bd-content footer-main">
                <div className="nav justify-content-center">{footerMain}</div>
            </footer>
        );
    }
}

Footer = withRouter(Footer);
export default Footer;
