import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Archive from "./Archive";
import Move from "./Move";
import NewCard from "./NewCard";
import NewHeading from "./NewHeading";
import QuickFind from "./QuickFind";
import When from "./When";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-main">
                <div className="nav justify-content-center">
                    <NewCard refetch={this.props.refetch} />
                    <NewHeading />
                    <Archive />
                    <When />
                    <Move />
                    <QuickFind />
                </div>
            </footer>
        );
    }
}

Footer = withRouter(Footer);
export default Footer;
