import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Icon from "../Base/Icon";

class ProjectItem extends Component {
    render() {
        return (
            <li className="nav-item" key={this.props.project.id}>
                <NavLink to={"/project/" + this.props.project.id}>
                    <div className="nav-link">
                        <Icon name="package" color="#212529" />
                        <input
                            type="text"
                            placeholder="New Project"
                            value={this.props.project.title}
                            className="sidebar-input"
                            onChange={e =>
                                (this.props.project.title = e.target.value)
                            }
                        />
                    </div>
                    <span className="list-length">
                        {/* {
                            this.props.cardStore.cards.filter(
                                card =>
                                    card.project === this.props.project.id &&
                                    !card.completed &&
                                    !card.archived
                            ).length
                        } */}
                        1
                    </span>
                </NavLink>
            </li>
        );
    }
}

ProjectItem = withRouter(ProjectItem);
export default ProjectItem;
