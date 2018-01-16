import React, { Component } from "react";

import Footer from "../components/Footer/Footer";
import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

class Trash extends Component {
    render() {
        const { data } = this.props;
        if (data.loading || !data.cards.length) {
            return (
                <div>
                    <div className="page">
                        <h3 className="list-title">
                            <Icon name="trash-2" color="#212529" />
                            List
                        </h3>

                        <div>
                            <Icon name="trash-2" color="#212529" size="64px" />
                        </div>
                    </div>

                    <Footer newCard="disabled" />
                </div>
            );
        }

        return (
            <div>
                <div className="page">
                    <h3 className="list-title">
                        <Icon name="trash-2" color="#212529" />
                        List
                    </h3>

                    <button className="ml-3 mb-3 btn btn-primary btn-sm">
                        Empty trash
                    </button>

                    <CardSortable cards={data.cards} />
                </div>

                <Footer newCard="disabled" />
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

export default compose(graphql(cardQuery))(Trash);
