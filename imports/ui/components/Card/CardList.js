import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import CurrentStore from "../../stores/CurrentStore";

import CardOuter from "./CardOuter";

const CardList = SortableContainer(({ refetch, cards }) => {
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
                    refetch={refetch}
                    outsideClickIgnoreClass={"ignore"}
                    disabled={disabled}
                />
            ))}
        </div>
    );
});

export default CardList;
