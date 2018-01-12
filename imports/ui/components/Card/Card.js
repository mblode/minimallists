import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import onClickOutside from "react-onclickoutside";
import { SortableElement } from "react-sortable-hoc";
import { observer } from "mobx-react";

import CurrentStore from "../../stores/CurrentStore";

import CardMore from "./CardMore";
import CardInput from "./CardInput";
import CardChecked from "./CardChecked";

@observer
class Card extends Component {
    constructor(props) {
        super(props);

        this.state = { active: "close" };

        this.openCard = this.openCard.bind(this);
        this.clickCard = this.clickCard.bind(this);
    }

    // handleClickOutside = () => {
    //     this.setState({ active: "close" });
    //     CurrentStore.currentActive("close");
    //     CurrentStore.currentCard(this.props.card._id);
    // };

    clickCard = () => {
        if (this.state.active == "close") {
            this.setState({ active: "click" });
            CurrentStore.currentActive("click");
        }
    };

    openCard = () => {
        this.setState({ active: "open" });
        CurrentStore.currentActive("open");
        CurrentStore.currentCard(this.props.card._id);
    };

    render() {
        const { card } = this.props;

        let cardMore = null;
        let cardClass = "";
        if (this.state.active === "open") {
            cardMore = (
                <CardMore card={this.props.card} refetch={this.props.refetch} />
            );
            cardClass = "card-item-open";
        } else if (this.state.active === "click") {
            cardMore = null;
            cardClass = "card-item-click";
        }

        return (
            <div
                className={`card-item ${cardClass}`}
                onDoubleClick={this.openCard}
                onClick={this.clickCard}
            >
                <div className="card-item-main">
                    <CardChecked refetch={this.props.refetch} card={card} />
                    <CardInput
                        refetch={this.props.refetch}
                        card={card}
                        active={this.state.active}
                    />

                    {cardMore}
                </div>
            </div>
        );
    }
}

export default SortableElement(Card);
