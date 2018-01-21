import React, { Component } from "react";
import SignUpForm from "../components/Forms/SignUpForm";

import Header from "../components/Header/Header";

class SignUp extends Component {
    render() {
        return (
            <div className="auth-page">
                <Header client={this.props.client} noNav />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
