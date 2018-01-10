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
    constructor(props) {
        super(props);

        this.getCard = this.getCard.bind(this);
    }

    getCard = () => {
        // let id = CurrentStore.cur.card.id;
        // let val = CardStore.cards.filter(card => {
        //     return card.id === id;
        // });
        // return val[0];
    };

    render() {
        let footerMain = null;

        if (CurrentStore.cur.active === "open") {
            footerMain = (
                <div>
                    <When card={this.getCard()} />
                    <Move card={this.getCard()} />
                    <Archive card={this.getCard()} />
                </div>
            );
        } else if (CurrentStore.cur.active === "open") {
            footerMain = (
                <div>
                    <When card={this.getCard()} />
                    <Move card={this.getCard()} />
                    <Archive card={this.getCard()} />
                </div>
            );
        } else if (
            this.props.location.pathname === "/logbook" ||
            this.props.location.pathname === "/trash"
        ) {
            footerMain = (
                <div>
                    <NewCard currentStore={CurrentStore} disabled />
                    <When disabled />
                    <Move disabled />
                    <QuickFind />
                </div>
            );
        } else {
            footerMain = (
                <div>
                    <NewCard currentStore={CurrentStore} />
                    <When disabled />
                    <Move disabled />
                    <QuickFind />
                </div>
            );
        }

        return (
            <footer className="footer-main">
                <div className="nav justify-content-center">
                    <NewCard refetch={this.props.refetch} />
                    <NewHeading />
                    <Archive />
                    <When />
                    <Move />
                    <QuickFind />
                    {footerMain}
                </div>
            </footer>
        );
    }
}

Footer = withRouter(Footer);
export default Footer;
