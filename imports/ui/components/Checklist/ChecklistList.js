import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import Checklist from "./Checklist";

const ChecklistList = ({ checklists }) => {
    if (checklists.length > 0) {
        return (
            <div>
                {checklists.map((checklist, index) => (
                    <li key={index}>{checklist.name}</li>
                ))}
            </div>
        );
    }
    return null;
};

export default ChecklistList;
