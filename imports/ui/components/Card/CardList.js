import React from "react";
import { SortableContainer } from "react-sortable-hoc";

import Card from "./Card";

const CardList = SortableContainer(({ refetch, cards }) => {
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
});

export default CardList;
