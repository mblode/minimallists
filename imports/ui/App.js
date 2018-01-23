import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";
import { Tracker } from "meteor/tracker";

import CurrentStore from "./stores/CurrentStore";

import Main from "./layouts/Main";
import Empty from "./layouts/Empty";
import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import Spinner from "./components/Base/Spinner";

import Inbox from "./pages/Inbox";
import List from "./pages/List";
import Trash from "./pages/Trash";
import Logbook from "./pages/Logbook";
import Project from "./pages/Project";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
                                        <Redirect to="/l/inbox" />
                                    ) : (
                                        <Redirect to="/home" />
                                    )
                                }
                            />
                        )}

                        <Route component={Main}>
                            <Route
                                path="/l/inbox"
                                render={props => (
                                    <Inbox client={client} {...props} />
                                )}
                            />
                            <Route
                                path="/l/:id"
                                render={props => (
                                    <List client={client} {...props} />
                                )}
                            />
                            <Route
                                path="/l/logbook"
                                component={Logbook}
                            />
                            <Route
                                path="/l/trash"
                                component={Trash}
                            />

                            <Route
                                path="/p/:id"
                                render={props => (
                                    <Project client={client} {...props} />
                                )}
                            />
                            <Route path="/profile" component={Profile} />
                            <Route path="/settings" component={Settings} />
                        </Route>
                        <Route component={Empty}>
                            <Route
                                path="/home"
                                component={Home}
                            />
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
                        </Route>
                        <Route path="*" component={NotFound} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default withApollo(App);
