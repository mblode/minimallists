import { Cards } from "./cards";
import { Checklists } from "../checklists/checklists";

export default {
    Query: {
        cards(obj, { completed, archived }, { userId }) {
            return Cards.find({
                userId,
                $and: [
                    { completed: { $eq: completed } },
                    { archived: { $eq: archived } }
                ]
            }).fetch();
        }
    },

    Card: {
        checklists: card =>
            Checklists.find({
                cardId: card._id
            }).fetch()
    },

    Mutation: {
        createCard(obj, { name, listId, projectId }, { userId }) {
            const res = Cards.insert({
                name,
                listId,
                projectId,
                completed: false,
                archived: false,
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
        updateCardArchived(obj, { _id, archived }, { userId }) {
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
