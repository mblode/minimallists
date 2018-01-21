import { observable } from "mobx";

export class CurrentStore {
    @observable
    cur = {
        cardId: "",
        active: "close",
        listId: "",
        projectId: ""
    };

    currentCard(value) {
        this.cur.cardId = value;
    }

    currentActive(value) {
        this.cur.active = value;
    }

    currentList(value) {
        this.cur.listId = value;
    }

    currentProject(value) {
        this.cur.projectId = value;
    }
}

export default new CurrentStore();
