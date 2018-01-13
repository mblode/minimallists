import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import Checklist from "./Checklist";

const ChecklistList = ({ refetch, checklists }) => {
    if (checklists.length > 0) {
        return (
            <div>
                {checklists.map((checklist, index) => (
                    <Checklist
                        key={index}
                        index={index}
                        checklist={checklist}
                        refetch={refetch}
                    />
                ))}
            </div>
        );
    }
    return null;
};

export default ChecklistList;
