import { observable } from "mobx";

export class CurrentStore {
    @observable
    cur = {
        card: "hello",
        active: "close"
    };

    currentCard(value) {
        this.cur.card = value;
    }

    currentActive(value) {
        this.cur.active = value;
    }
}

export default new CurrentStore();
