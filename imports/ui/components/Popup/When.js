import React from "react";
import Icon from "../Base/Icon";

export default class When extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    render() {
        const { showModal } = this.state;

        let listNodes = ListStore.lists.map(list => {
            return (
                <li
                    key={list.id}
                    onClick={() => {
                        this.props.card.list = list.id;
                        this.setState({ showModal: false });
                    }}
                >
                    <a>{list.title}</a>
                </li>
            );
        });

        let searchModal = null;
        if (showModal) {
            searchModal = (
                <div
                    className="modal fade show d-block"
                    id="myModal"
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                When
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() =>
                                        this.setState({ showModal: false })
                                    }
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">{listNodes}</div>
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
