import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            fireRedirect: false
        };
    }

    signUpUser = e => {
        e.preventDefault();

        Accounts.createUser(
            {
                email: this.email.value,
                password: this.password.value
            },
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
                <form onSubmit={this.signUpUser} className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className="h2 mb-3 font-weight-normal">Sign up</h1>
                        <p>
                            or
                            <Link to="/signin"> sign in to your account</Link>
                        </p>
                    </div>

                    <div className="form-label-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            ref={input => (this.email = input)}
                        />
                    </div>

                    <div className="form-label-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            ref={input => (this.password = input)}
                        />
                    </div>

                    <button
                        className="btn btn-lg btn-primary btn-block mt-3"
                        type="submit"
                    >
                        Sign up
                    </button>
                </form>

                {fireRedirect && <Redirect to="/inbox" />}
            </div>
        );
    }
}

export default SignUpForm;
