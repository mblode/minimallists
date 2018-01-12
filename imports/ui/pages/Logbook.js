import React, { Component } from "react";

import Footer from "../components/Footer/Footer";
import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Logbook extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;
        return (
            <div>
                <div className="page">
                    <h3 className="list-title">
                        <Icon name="book" color="#212529" />
                        Logbook
                    </h3>
                    <CardSortable refetch={data.refetch} cards={data.cards} />
                </div>

                <Footer newCard="disabled" refetch={data.refetch} />
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
        }
    }
`;

export default graphql(cardQuery)(Logbook);
