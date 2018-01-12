import { observable } from "mobx";

export class CurrentStore {
    @observable
    cur = {
        card: "",
        active: "close",
        listId: ""
    };

    currentCard(value) {
        this.cur.card = value;
    }

    currentActive(value) {
        this.cur.active = value;
    }

    currentList(value) {
        this.cur.listId = value;
    }
}

export default new CurrentStore();
