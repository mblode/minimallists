import React, { Component } from "react";
import Icon from "../Base/Icon";

export default class Move extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    render() {
        const { showModal } = this.state;

        let projectNodes = ProjectStore.projects.map(project => {
            return (
                <li
                    key={project.id}
                    onClick={() => {
                        this.props.card.project = project.id;
                        this.setState({ showModal: false });
                    }}
                >
                    <a>{project.title}</a>
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
                                Move
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
                            <div className="modal-body">
                                <div>
                                    <li
                                        onClick={() => {
                                            this.props.card.list = 0;
                                            this.setState({ showModal: false });
                                        }}
                                    >
                                        <a>Inbox</a>
                                    </li>
                                    <li
                                        onClick={() => {
                                            this.props.card.project = "";
                                            this.setState({ showModal: false });
                                        }}
                                    >
                                        <a>No Project</a>
                                    </li>
                                    <hr />
                                    {projectNodes}
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
