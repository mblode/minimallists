import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import CurrentStore from "../stores/CurrentStore";

import Footer from "../components/Footer/Footer";
import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";
import Popover from "../components/Popover/Popover";

class List extends Component {
    updateList = () => {
        this.props
            .updateList({
                variables: {
                    name: this.listPageName.value,
                    _id: this.props.data.list._id
                }
            })
            .then(({ data }) => {
                this.props.data.refetch();
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        CurrentStore.currentList(this.props.match.params.id);

        const { data } = this.props;
        if (data.loading) return null;
        return (
            <div>
                <div className="page">
                    <div className="project-title-group area-title-group">
                        <Icon name="inbox" color="#212529" />

                        <input
                            type="text"
                            ref={input => (this.listPageName = input)}
                            onChange={this.updateList}
                            placeholder="New List"
                            className="project-title"
                            value="Inbox"
                        />
                        <Popover
                            currentStore={CurrentStore}
                            refetch={data.refetch}
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

const updateList = gql`
    mutation updateList($name: String, $_id: String!) {
        updateList(name: $name, _id: $_id) {
            name
            _id
        }
    }
`;

export default compose(
    graphql(cardQuery),
    graphql(updateList, { name: "updateList" })
)(List);
