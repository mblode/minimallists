import React, { Component } from "react";
import Icon from "../Base/Icon";

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    filter(e) {
        CardStore.filter = e.target.value;
    }

    render() {
        const { showModal } = this.state;
        const { filter, filteredCards } = CardStore;
        let searchModal = null;

        let cardNodes = filteredCards.map(card => {
            return (
                <li>
                    <a>{card.task}</a>
                </li>
            );
        });

        if (showModal) {
            searchModal = (
                <div
                    className="modal show d-block"
                    id="myModal"
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <input
                                    className="filter form-control"
                                    value={filter}
                                    placeholder="Quick Find"
                                    onChange={this.filter.bind(this)}
                                />
                            </div>
                            <div className="modal-body">
                                <div onChange={this.searching}>
                                    <ul>{cardNodes}</ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={() =>
                                        this.setState({ showModal: false })
                                    }
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return <span>{searchModal}</span>;
    }
}
