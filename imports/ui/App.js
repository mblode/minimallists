import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";
import { Tracker } from "meteor/tracker";

import CurrentStore from "./stores/CurrentStore";

import Home from "./pages/Home";
import Spinner from "./components/Base/Spinner";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Inbox from "./pages/Inbox";
import List from "./pages/List";
import Project from "./pages/Project";
import Logbook from "./pages/Logbook";
import Trash from "./pages/Trash";

import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

@observer
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true };
    }

    componentWillMount() {
        Tracker.autorun(() => {
            if (Accounts.loginServicesConfigured()) {
                this.setState({ loading: false });
            }
        });
    }

    componentDidMount() {
        document.body.classList.toggle("open", false);
    }

    componentWillUnMount() {
        document.body.classList.remove("closed");
    }

    render() {
        const { client } = this.props;

        if (CurrentStore.cur.active === "open") {
            document.body.classList.toggle("open", true);
        } else {
            document.body.classList.toggle("open", false);
        }

        return (
            <div>
                <BrowserRouter>
                    <div>
                        {this.state.loading ? (
                            <Spinner />
                        ) : (
                            <Route
                                exact
                                path="/"
                                render={() =>
                                    Meteor.user() ? (
                                        <Redirect to="/inbox" />
                                    ) : (
                                        <Home client={client} />
                                    )
                                }
                            />
                        )}

                        <Route
                            path="/signin"
                            render={props => (
                                <SignIn client={client} {...props} />
                            )}
                        />
                        <Route
                            path="/signup"
                            render={props => (
                                <SignUp client={client} {...props} />
                            )}
                        />

                        <Route
                            exact
                            path="/inbox"
                            render={props => (
                                <Inbox client={client} {...props} />
                            )}
                        />

                        <Route
                            exact
                            path="/l/:id"
                            render={props => (
                                <List client={client} {...props} />
                            )}
                        />
                        <Route path="/logbook" component={Logbook} />
                        <Route path="/trash" component={Trash} />

                        <Route path="/p/:id?" component={Project} />

                        <Route path="/profile" component={Profile} />
                        <Route path="/settings" component={Settings} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default withApollo(App);
