import { observable } from "mobx";

export class CurrentStore {
    @observable
    cur = {
        cardId: "",
        active: "close",
        listId: ""
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
}

export default new CurrentStore();
