import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Header from "../components/Header/Header";
import SignUpForm from "../components/Forms/SignUpForm";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header client={this.props.client} />
                    </div>

                    <div className="col-sm-7">
                        <h1>Put your creative energy to work with Dropbox</h1>
                        <p>
                            Dropbox is a modern workspace designed to reduce
                            busywork – so you can focus on the things that
                            matter.
                        </p>
                    </div>

                    <div className="col-sm-5">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
