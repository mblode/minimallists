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

        this.openCard = this.openCard.bind(this);
        this.clickCard = this.clickCard.bind(this);
    }

    handleClickOutside = () => {
        this.props.card.active = "close";
        CurrentStore.currentCard("");
        CurrentStore.currentActive("close");
    };

    openCard = () => {
        this.props.card.active = "open";
        CurrentStore.currentCard(this.props.card);
        CurrentStore.currentActive("open");
    };

    clickCard = () => {
        if (this.props.card.active === "close") {
            this.props.card.active = "click";
            CurrentStore.currentCard(this.props.card);
            CurrentStore.currentActive("click");
        }
    };

    render() {
        const { card } = this.props;

        let cardMore = null;
        let cardClass = " ";
        if (this.props.card.active === "open") {
            cardMore = <CardMore card={this.props.card} />;
            cardClass = "card-open";
        } else if (this.props.card.active === "click") {
            cardMore = null;
            cardClass = "card-click";
        }

        return (
            <div
                className={`card-item ${cardClass}`}
                onDoubleClick={() => this.openCard()}
                onClick={() => this.clickCard()}
            >
                <div className="card-item-main">
                    <CardChecked refetch={this.props.refetch} card={card} />
                    <CardInput refetch={this.props.refetch} card={card} />

                    {cardMore}
                </div>
            </div>
        );
    }
}

export default SortableElement(Card);
