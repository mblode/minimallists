import React, { Component } from "react";

import Footer from "../components/Footer/Footer";
import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class List extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;
        return (
            <div>
                <div className="page">
                    <h3 className="list-title">
                        <Icon name={this.props.icon} color="#212529" />
                        {this.props.name}
                    </h3>
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

export default graphql(cardQuery)(List);
