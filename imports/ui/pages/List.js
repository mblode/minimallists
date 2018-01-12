import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import CurrentStore from "../stores/CurrentStore";

import Footer from "../components/Footer/Footer";
import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";

class List extends Component {
    updateList = () => {
        this.props
            .updateList({
                variables: {
                    name: this.listPageName.value,
                    _id: this.props.list._id
                }
            })
            .then(({ data }) => {
                this.props.refetch();
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
                            value={data.list.name}
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
        list(_id: $id) {
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
    graphql(cardQuery, { $id: "ozkXGDFdk5YeMbixC" }),
    graphql(updateList, { name: "updateList" })
)(List);
