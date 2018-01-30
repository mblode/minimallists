import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

class Trash extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;

        return (
            <div className="page">
                <h3 className="list-title">
                    <Icon name="trash-2" color="#212529" />
                    Trash
                </h3>

                <button className="ml-3 mb-3 btn btn-primary btn-sm">
                    Empty trash
                </button>

                <CardSortable cards={data.cards} />
            </div>
        );
    }
}

const listQuery = gql`
    {
        cards(completed: true, archived: true) {
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

export default compose(graphql(listQuery))(Trash);
