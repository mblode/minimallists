import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

import CurrentStore from "./stores/CurrentStore";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import SignIn from "./components/Forms/SignIn";
import SignUp from "./components/Forms/SignUp";

import Area from "./pages/Area";
import List from "./pages/List";
import Project from "./pages/Project";
import Logbook from "./pages/Logbook";
import Trash from "./pages/Trash";

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
        if (CurrentStore.cur.active === "open") {
            document.body.classList.toggle("open", true);
        } else {
            document.body.classList.toggle("open", false);
        }
        return (
            <div>
                <BrowserRouter>
                    <div className="row flex-xl-nowrap no-gutters">
                        <div className="col-12 col-md-3 col-xl-2 sidebar">
                            <Sidebar />
                        </div>

                        <main className="col-12 col-md-9 col-xl-10 bd-content">
                            <Header />

                            {/* <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/l/inbox" />}
                            /> */}

                            <Route
                                path="/l/:id"
                                render={props => <List {...props} />}
                            />
                            {/* <Route path="/logbook" component={Logbook} />
                            <Route path="/trash" component={Trash} />
                            <Route path="/p/:id?" component={Project} />
                            <Route path="/a/:id?" component={Area} />

                            <Route path="/profile" component={Profile} />
                            <Route path="/settings" component={Settings} />

                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={SignUp} /> */}
                        </main>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
