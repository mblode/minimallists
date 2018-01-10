import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import Checklist from "./Checklist";

const ChecklistList = SortableContainer(({ items }) => {
    return (
        <div>
            {items.map((value, index) => (
                <Checklist key={`item-${index}`} index={index} value={value} />
            ))}
        </div>
    );
});

export default ChecklistList;
