import { Cards } from "./cards";
import { Checklists } from "../checklists/checklists";

export default {
    Query: {
        card(obj, { _id }, { userId }) {
            return Cards.findOne(userId, _id);
        },
        cards(obj, { completed, archived }, { userId }) {
            if (completed && archived) {
                return Cards.find({
                    userId,
                    $and: [
                        { completed: { $eq: JSON.parse(completed) } },
                        { archived: { $eq: JSON.parse(archived) } }
                    ]
                }).fetch();
            } else if (completed) {
                return Cards.find({
                    userId,
                    completed: { $eq: JSON.parse(completed) }
                }).fetch();
            } else if (archived) {
                return Cards.find({
                    userId,
                    archived: { $eq: JSON.parse(archived) }
                }).fetch();
            } else {
                return Cards.find({ userId }).fetch();
            }
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
        updateCard(obj, { name, _id }) {
            const res = Cards.update(_id, {
                $set: {
                    name
                }
            });
            return Cards.findOne(res);
        },
        updateCardCompleted(obj, { completed, _id }) {
            const res = Cards.update(_id, {
                $set: {
                    completed
                }
            });
            return Cards.findOne(res);
        },
        updateCardNotes(obj, { notes, _id }) {
            const res = Cards.update(_id, {
                $set: {
                    notes
                }
            });
            return Cards.findOne(res);
        },
        updateCardArchived(obj, { archived, _id }) {
            const res = Cards.update(_id, {
                $set: {
                    archived
                }
            });
            return Cards.findOne(res);
        },
        deleteCard(obj, { _id }) {
            const res = Cards.remove({
                _id
            });
            return Cards.findOne(res);
        },
        emptyTrash(obj, args, { userId }) {
            return Cards.remove({
                userId,
                archived: { $eq: true }
            });
        }
    }
};
