import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import CurrentStore from "../../stores/CurrentStore";

import CardOuter from "./CardOuter";

const CardList = SortableContainer(({ cards }) => {
    let disabled = false;
    if (CurrentStore.cur.active == "open") {
        disabled = true;
    }

    return (
        <div>
            {cards.map((card, index) => (
                <CardOuter
                    key={index}
                    index={index}
                    card={card}
                    outsideClickIgnoreClass={"ignore"}
                    disabled={disabled}
                />
            ))}
        </div>
    );
});

export default CardList;
