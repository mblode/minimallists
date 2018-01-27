import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import Checklist from "./Checklist";

const ChecklistList = ({ checklists }) => {
    return (
        <div>
            {checklists.map((checklist, index) => (
                <Checklist key={index} index={index} checklist={checklist} />
            ))}
        </div>
    );
};

export default ChecklistList;
