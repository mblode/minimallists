import React, { Component } from "react";
import SignInForm from "../components/Forms/SignInForm";
import queryString from "query-string";

import Header from "../components/Header/Header";
import Alert from "../components/Base/Alert";

class SignIn extends Component {
    render() {
        const parsed = queryString.parse(this.props.location.search).src;
        let alert = null;

        if (parsed == "signout") {
            alert = <Alert text="Signed out!" kind="success" />;
        }

        return (
            <div className="auth-page">
                <Header client={this.props.client} noNav />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {alert}
                            <SignInForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
