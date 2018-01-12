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
        // let footerMain = null;

        // if (CurrentStore.cur.active === "open") {
        //     footerMain = (
        //         <div>
        //             <When currentStore={CurrentStore} />
        //             <Move currentStore={CurrentStore} />
        //             <Archive currentStore={CurrentStore} />
        //         </div>
        //     );
        // } else if (CurrentStore.cur.active === "open") {
        //     footerMain = (
        //         <div>
        //             <When currentStore={CurrentStore} />
        //             <Move currentStore={CurrentStore} />
        //             <Archive currentStore={CurrentStore} />
        //         </div>
        //     );
        // } else if (
        //     this.props.location.pathname === "/logbook" ||
        //     this.props.location.pathname === "/trash"
        // ) {
        //     footerMain = (
        //         <div>
        //             <NewCard disabled />
        //             <When disabled />
        //             <Move disabled />
        //             <QuickFind />
        //         </div>
        //     );
        // } else {
        //     footerMain = (
        //         <div>
        //             <NewCard currentStore={CurrentStore} />
        //             <When disabled />
        //             <Move disabled />
        //             <QuickFind />
        //         </div>
        //     );
        // }

        return (
            <footer className="footer-main">
                <div className="nav justify-content-center">
                    <NewCard
                        currentStore={CurrentStore}
                        refetch={this.props.refetch}
                        buttonState={this.props.newCard}
                    />
                    <NewHeading
                        currentStore={CurrentStore}
                        buttonState={this.props.newHeading}
                    />
                    <Archive
                        currentStore={CurrentStore}
                        refetch={this.props.refetch}
                        buttonState={this.props.archive}
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
                    {/* {footerMain} */}
                </div>
            </footer>
        );
    }
}

Footer = withRouter(Footer);
export default Footer;
