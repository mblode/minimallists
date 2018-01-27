import { Cards } from "./cards";
import { Checklists } from "../checklists/checklists";

export default {
    Query: {
        cards(obj, args, { userId }) {
            return Cards.find({ userId }).fetch();
        }
    },

    Card: {
        checklists: card =>
            Checklists.find({
                cardId: card._id
            }).fetch()
    },

    Mutation: {
        createCard(obj, { name, listId }, { userId }) {
            const res = Cards.insert({
                name,
                listId,
                notes: "",
                userId
            });
            return Cards.findOne(res);
        },
        updateCard(obj, { name, _id }, { userId }) {
            const cardId = Cards.update(_id, {
                $set: {
                    name
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardCompleted(obj, { completed, _id }, { userId }) {
            const cardId = Cards.update(_id, {
                $set: {
                    completed
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardNotes(obj, { notes, _id }, { userId }) {
            const cardId = Cards.update(_id, {
                $set: {
                    notes
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardArchived(obj, { archived, _id }, { userId }) {
            const cardId = Cards.update(_id, {
                $set: {
                    archived
                }
            });
            return Cards.findOne(cardId);
        },
        deleteCard(obj, { _id }, { userId }) {
            const cardId = Cards.remove({
                _id
            });
            return Cards.findOne(cardId);
        },
        updateCardArchived(obj, { pos, _id }, { userId }) {
            const cardId = Cards.update(_id, {
                $set: {
                    pos
                }
            });
            return Cards.findOne(cardId);
        }
    }
};
