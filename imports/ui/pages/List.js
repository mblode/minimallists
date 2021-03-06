import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import CurrentStore from "../stores/CurrentStore";

import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";
import DeleteList from "../components/Popover/DeleteList";

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
            <div className="page">
                <div className="project-title-group area-title-group">
                    <Icon name="circle" color="#212529" />

                    <input
                        type="text"
                        ref={input => (this.listPageName = input)}
                        onChange={this.updateList}
                        placeholder="New List"
                        className="project-title"
                        value={list.name}
                    />
                    <DeleteList currentStore={CurrentStore} />
                </div>
                <CardSortable cards={list.cards} />
            </div>
        );
    }
}

const listQuery = gql`
    query listQuery($id: String!) {
        list(_id: $id) {
            _id
            name
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
    graphql(listQuery, {
        options: ownProps => ({
            variables: {
                id: ownProps.match.params.id,
                skip: 0
            }
        }),
        props: ({ data }) => ({ ...data })
    }),
    graphql(updateList, {
        name: "updateList",
        options: {
            refetchQueries: ["listQuery"]
        }
    })
)(List);
