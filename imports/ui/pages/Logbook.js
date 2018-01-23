import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

class Logbook extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;

        return (
            <div className="page">
                <h3 className="list-title">
                    <Icon name="book" color="#212529" />
                    Logbook
                </h3>
                <CardSortable cards={data.cards} />
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
