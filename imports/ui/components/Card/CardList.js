import React from "react";
import { SortableContainer } from "react-sortable-hoc";

import Card from "./Card";

const CardList = SortableContainer(({ refetch, cards }) => {
    if (cards.length > 0) {
        return (
            <div>
                {cards.map((card, index) => (
                    <Card
                        key={`card-${index}`}
                        index={index}
                        card={card}
                        refetch={refetch}
                    />
                ))}
            </div>
        );
    }
    return null;
});

export default CardList;
