import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

class Logbook extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;

        return (
            <div className="row flex-xl-nowrap no-gutters">
                <div className="col-12 col-md-3 col-xl-2 sidebar">
                    <Sidebar />
                </div>

                <main className="col-12 col-md-9 col-xl-10 bd-content">
                    <Header client={this.props.client} />
                    <div className="page">
                        <h3 className="list-title">
                            <Icon name="book" color="#212529" />
                            Logbook
                        </h3>
                        <CardSortable cards={data.cards} />
                    </div>

                    <Footer newCard="disabled" />
                </main>
            </div>
        );
    }
}

const cardQuery = gql`
    {
        cards {
            _id
            name
            completed
            notes
            checklists {
                _id
                name
                completed
            }
        }
    }
`;

export default compose(graphql(cardQuery))(Logbook);
