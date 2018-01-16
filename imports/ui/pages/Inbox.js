import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import CurrentStore from "../stores/CurrentStore";

import Footer from "../components/Footer/Footer";
import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";
import Popover from "../components/Popover/Popover";

class Inbox extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;
        return (
            <div>
                <div className="page">
                    <div className="project-title-group area-title-group">
                        <Icon name="inbox" color="#212529" />
                        Icon
                    </div>
                    <CardSortable cards={data.cards} />
                </div>

                <Footer />
            </div>
        );
    }
}

const cardQuery = gql`
    query cardQuery {
        lists {
            _id
            name
        }
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

export default graphql(cardQuery)(Inbox);
