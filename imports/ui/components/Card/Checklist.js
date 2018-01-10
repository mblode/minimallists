import React from "react";
// import onClickOutside from "react-onclickoutside";
import { SortableElement, SortableHandle } from "react-sortable-hoc";

const DragHandle = SortableHandle(() => <span>::</span>);

const Checklist = SortableElement(({ value }) => (
    <div className="card-item">
        <div className="card-item-main">
            <input className="card-item-check" type="checkbox" />

            {value}

            <DragHandle />
        </div>
    </div>
));

export default Checklist;