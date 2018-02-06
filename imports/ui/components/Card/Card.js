import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { observer } from "mobx-react";
import onClickOutside from "react-onclickoutside";
import Icon from "../Base/Icon";

import CurrentStore from "../../stores/CurrentStore";

import CardMore from "./CardMore";
import CardInput from "./CardInput";
import CardChecked from "./CardChecked";

@observer
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { active: "close" };

        this.clickCard = this.clickCard.bind(this);
        this.openCard = this.openCard.bind(this);
    }

    handleClickOutside = () => {
        if (this.state.active == "open") {
            this.setState({ active: "click" });
            CurrentStore.currentActive("click");
            CurrentStore.currentCard(this.props.card._id);
        } else if (this.state.active == "click") {
            this.setState({ active: "close" });
            CurrentStore.currentActive("close");
            CurrentStore.currentCard("");
        }
    };

    clickCard = () => {
        if (this.state.active == "close") {
            this.setState({ active: "click" });
            CurrentStore.currentActive("click");
            CurrentStore.currentCard(this.props.card._id);
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
        let checklistIcon = null;

        if (card.checklists.length > 0) {
            checklistIcon = (
                <span className="card-item-checklist-icon">
                    <Icon name="list" color="#6c757d" size="16px" />
                </span>
            );
        }

        if (this.state.active === "open") {
            cardMore = <CardMore card={this.props.card} />;
            cardClass = "card-item-open";
            checklistIcon = null;
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
                    <CardChecked card={card} />
                    <CardInput card={card} active={this.state.active} />

                    {checklistIcon}

                    {cardMore}
                </div>
            </div>
        );
    }
}

export default onClickOutside(Card);
