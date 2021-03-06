import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";
import { Tracker } from "meteor/tracker";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import CurrentStore from "./stores/CurrentStore";

import Main from "./layouts/Main";
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
    componentDidMount() {
        document.body.classList.toggle("open", false);
    }

    componentWillUnMount() {
        document.body.classList.remove("closed");
    }

    render() {
        const { loading, client, user } = this.props;
        let indexRedirect = null;
        if (loading) {
            return null;
        } else {
            indexRedirect = (
                <Route
                    exact
                    path="/"
                    render={props =>
                        user._id ? (
                            <Main client={client} user={user}>
                                <Inbox />
                            </Main>
                        ) : (
                            <Home user={user} />
                        )
                    }
                />
            );
        }

        if (CurrentStore.cur.active === "open") {
            document.body.classList.toggle("open", true);
        } else {
            document.body.classList.toggle("open", false);
        }

        return (
            <div>
                <BrowserRouter>
                    <div>
                        {indexRedirect}

                        <Route
                            path="/l/:id"
                            render={props => (
                                <Main client={client} user={user}>
                                    <List {...props} />
                                </Main>
                            )}
                        />
                        <Route
                            path="/logbook"
                            render={props => (
                                <Main client={client} user={user}>
                                    <Logbook {...props} />
                                </Main>
                            )}
                        />
                        <Route
                            path="/trash"
                            render={props => (
                                <Main client={client} user={user}>
                                    <Trash {...props} />
                                </Main>
                            )}
                        />
                        <Route
                            path="/p/:id"
                            render={props => (
                                <Main client={client} user={user}>
                                    <Project {...props} />
                                </Main>
                            )}
                        />

                        <Route
                            path="/profile"
                            component={Profile}
                            user={user}
                        />
                        <Route
                            path="/settings"
                            component={Settings}
                            user={user}
                        />

                        <Route
                            path="/signin"
                            render={props => (
                                <SignIn client={client} {...props} />
                            )}
                        />
                        <Route
                            path="/signup"
                            render={props => <SignUp client={client} />}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const userQuery = gql`
    query User {
        user {
            _id
            email
        }
    }
`;

export default graphql(userQuery, {
    props: ({ data }) => ({ ...data })
})(withApollo(App));
