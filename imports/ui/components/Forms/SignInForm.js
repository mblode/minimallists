import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";

@withApollo
class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            fireRedirect: false
        };
    }

    loginUser = e => {
        e.preventDefault();

        Meteor.loginWithPassword(
            this.email.value,
            this.password.value,
            error => {
                if (!error) {
                    this.props.client.resetStore();
                }
                console.log(error);
            }
        );

        this.setState({ fireRedirect: true });
    };

    render() {
        const { fireRedirect } = this.state;

        return (
            <div>
                <form onSubmit={this.loginUser} className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className="h2 mb-3 font-weight-normal">Sign in</h1>
                        <p>
                            <Link to="/signup">Need an account?</Link>
                        </p>
                    </div>

                    <div className="form-label-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            required
                            ref={input => (this.email = input)}
                        />
                    </div>

                    <div className="form-label-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            required
                            ref={input => (this.password = input)}
                        />
                    </div>

                    <button
                        className="btn btn-lg btn-primary btn-block mt-3"
                        type="submit"
                    >
                        Sign in
                    </button>
                </form>

                {fireRedirect && <Redirect to="/inbox" />}
            </div>
        );
    }
}

export default SignInForm;
