import React, { Component } from "react";

import Textarea from "../components/Base/ExpandingTextarea";
import Footer from "../components/Footer/Footer";
import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Project extends Component {
    render() {
        const { data } = this.props;
        if (data.loading) return null;
        return (
            <div>
                <div className="page">
                    <div className="project-title-group">
                        <Icon name="folder" color="#212529" />

                        <input
                            type="text"
                            placeholder="New Project"
                            className="project-title"
                        />
                    </div>

                    <Textarea
                        rows="3"
                        maxLength="3000"
                        placeholder="Notes"
                        className="project-notes"
                    />

                    <CardSortable refetch={data.refetch} cards={data.cards} />
                </div>

                <Footer newHeading="visible" refetch={data.refetch} />
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

export default graphql(cardQuery)(Project);
