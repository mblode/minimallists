import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import CurrentStore from "../stores/CurrentStore";

import CardSortable from "../components/Card/CardSortable";
import Icon from "../components/Base/Icon";
import Popover from "../components/Popover/Popover";

class Project extends Component {
    updateProject = () => {
        this.props
            .updateProject({
                variables: {
                    name: this.projectPageName.value,
                    _id: this.props.project._id
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        CurrentStore.currentProject(this.props.match.params.id);

        const { loading, project, cards } = this.props;
        if (loading) return null;
        return (
            <div className="page">
                <div className="project-title-group area-title-group">
                    <Icon name="folder" color="#212529" />

                    <input
                        type="text"
                        ref={input => (this.projectPageName = input)}
                        onChange={this.updateProject}
                        placeholder="New Project"
                        className="project-title"
                        value={project.name}
                    />
                    <Popover currentStore={CurrentStore} />
                </div>
                <CardSortable cards={cards} />
            </div>
        );
    }
}

const listQuery = gql`
    query listQuery($id: String!) {
        project(_id: $id) {
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

const updateProject = gql`
    mutation updateProject($name: String, $_id: String!) {
        updateProject(name: $name, _id: $_id) {
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
    graphql(updateProject, {
        name: "updateProject",
        options: {
            refetchQueries: ["listQuery"]
        }
    })
)(Project);
