import React, { Component } from "react";

import Textarea from "../Base/ExpandingTextarea";
import ChecklistSortable from "./ChecklistSortable";
import When from "./When";
import Labels from "./Labels";
import NewChecklist from "./NewChecklist";
import Deadline from "./Deadline";

class CardMore extends Component {
    render() {
        return (
            <div className="card-item-more">
                <Textarea
                    rows="3"
                    maxLength="3000"
                    placeholder="Notes"
                    className="card-item-notes"
                />

                <ChecklistSortable />

                <When />
                <Labels />
                <NewChecklist />
                <Deadline />
            </div>
        );
    }
}

export default CardMore;
