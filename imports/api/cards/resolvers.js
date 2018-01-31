import { Cards } from "./cards";
import { Checklists } from "../checklists/checklists";

export default {
    Query: {
        card(obj, { _id }, { userId }) {
            return Cards.findOne(_id);
        },
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
        emptyTrash(obj, { archived }, { userId }) {
            return Cards.remove({ archived });
        }
    }
};
