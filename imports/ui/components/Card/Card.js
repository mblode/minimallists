import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import onClickOutside from "react-onclickoutside";
import { SortableElement } from "react-sortable-hoc";
import CardMore from "./CardMore";
import CardInput from "./CardInput";
import CardChecked from "./CardChecked";

class Card extends Component {
    constructor(props) {
        super(props);

        this.openCard = this.openCard.bind(this);
        this.clickCard = this.clickCard.bind(this);
        this.state = {
            currentCard: "",
            currentActive: "",
            currentActive: "close"
        };
    }

    handleClickOutside = () => {
        this.setState({
            active: "close",
            currentCard: "",
            currentActive: "close"
        });
    };

    openCard = () => {
        this.state.active = "open";
        this.setState({
            active: "open",
            currentCard: this.props.card,
            currentActive: "open"
        });
    };

    clickCard = () => {
        if (this.state.active === "close") {
            this.state.active = "click";
            this.setState({
                active: "click",
                currentCard: this.props.card,
                currentActive: "click"
            });
        }
    };

    render() {
        const { card } = this.props;

        let cardMore = null;
        let cardClass = " ";
        if (this.state.active === "open") {
            cardMore = <CardMore refetch={this.props.refetch} card={card} />;
            cardClass = "card-item-open";
        } else if (this.state.active === "click") {
            cardMore = null;
            cardClass = "card-item-click";
        }

        return (
            <div
                className={`card-item ${cardClass}`}
                onDoubleClick={() => this.openCard()}
                onClick={() => this.clickCard()}
            >
                <div className={`card-item-main ${this.props.card.complete}`}>
                    <CardChecked refetch={this.props.refetch} card={card} />
                    <CardInput refetch={this.props.refetch} card={card} />

                    {cardMore}
                </div>
            </div>
        );
    }
}

export default SortableElement(Card);
