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
                    _id: this.props.list._id
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        CurrentStore.currentList(this.props.match.params.id);

        const { loading, list, cards } = this.props;
        if (loading) return null;
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
                            value={list.name}
                        />
                        <Popover currentStore={CurrentStore} />
                    </div>
                    <CardSortable cards={cards} />
                </div>

                <Footer />
            </div>
        );
    }
}

const cardQuery = gql`
    query cardQuery($slug: String!) {
        list(_id: $slug) {
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
    graphql(cardQuery, {
        options: {
            variables: {
                slug: "m5bobxPetFpYaRsLa"
            }
        },
        props: ({ data }) => ({ ...data })
    }),
    graphql(updateList, {
        name: "updateList",
        options: {
            refetchQueries: ["cardQuery"]
        }
    })
)(List);
