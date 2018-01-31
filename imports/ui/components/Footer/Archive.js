import React, { Component } from "react";
import { observer } from "mobx-react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Icon from "../Base/Icon";

const updateCardArchived = gql`
    mutation updateCardArchived($_id: String!, $archived: Boolean) {
        updateCardArchived(_id: $_id, archived: $archived) {
            _id
        }
    }
`;

@observer
class Archive extends Component {
    updateCardArchived = () => {
        this.props
            .updateCardArchived({
                variables: {
                    archived: true,
                    _id: this.props.currentStore.cur.cardId
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const icon = <Icon name="trash-2" color="#212529" size="16px" />;
        let button = (
            <button
                type="button"
                className="btn btn-sm footer-button"
                onClick={this.updateCardArchived}
            >
                {icon}
            </button>
        );

        if (this.props.buttonState === "disabled") {
            button = (
                <button
                    type="button"
                    className="btn btn-sm footer-button"
                    disabled
                >
                    {icon}
                </button>
            );
        } else if (this.props.buttonState === "hidden") {
            button = null;
        }

        return <span>{button}</span>;
    }
}

export default graphql(updateCardArchived, {
    name: "updateCardArchived",
    options: {
        refetchQueries: ["listQuery"]
    }
})(Archive);

