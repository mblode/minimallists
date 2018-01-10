import React, { Component } from "react";

import Footer from "../components/Footer/Footer";
import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Area extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;
        return (
            <div>
                <div className="page">
                    <div className="project-title-group">
                        <Icon name="package" color="#212529" />

                        <input
                            type="text"
                            placeholder="New Area"
                            className="project-title"
                        />
                    </div>
                    <CardSortable refetch={data.refetch} cards={data.cards} />
                </div>

                <Footer refetch={data.refetch} />
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

        checklists {
            _id
            name
            completed
        }
    }
`;

export default graphql(cardQuery)(Area);
