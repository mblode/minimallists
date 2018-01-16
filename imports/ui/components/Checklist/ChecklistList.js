import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import Checklist from "./Checklist";

const ChecklistList = ({ checklists }) => {
    if (checklists.length > 0) {
        return (
            <div>
                {checklists.map((checklist, index) => (
                    <Checklist
                        key={index}
                        index={index}
                        checklist={checklist}
                    />
                ))}
            </div>
        );
    }
    return null;
};

export default ChecklistList;
