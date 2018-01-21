import { Cards, Checklists, Labels, Lists, Projects } from "./cards";

export default {
    Query: {
        card(obj, { _id }, { userId }) {
            return Cards.findOne(_id);
        },
        cards(obj, args, { userId }) {
            return Cards.find({ userId }).fetch();
        },
        checklist(obj, { _id }, { userId }) {
            return Checklists.findOne(_id);
        },
        checklists(obj, { _id }, { userId }) {
            return Checklists.find({ userId }).fetch();
        },
        labels(obj, { _id }, { userId }) {
            return Labels.find({}).fetch();
        },
        list(obj, { _id }, { userId }) {
            return Lists.findOne(_id);
        },
        lists(obj, { _id }, { userId }) {
            return Lists.find({ userId }).fetch();
        },
        project(obj, { _id }, { userId }) {
            return Projects.findOne(_id);
        },
        projects(obj, { _id }, { userId }) {
            return Projects.find({ userId }).fetch();
        }
    },

    Card: {
        checklists({ _id }) {
            return Checklists.find({ cardId: _id }).fetch();
        }
    },

    Checklist: {
        card({ cardId }) {
            return Cards.findOne(ObjectId(cardId));
        }
    },

    Mutation: {
        createCard(obj, { name, listId }, { userId }) {
            const res = Cards.insert({
                name,
                listId,
                userId
            });
            return Cards.findOne(res);
        },
        updateCard(obj, { name, _id }, { userId }) {
            const cardId = Cards.update(userId, _id, {
                $set: {
                    name
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardCompleted(obj, { completed, _id }, { userId }) {
            const cardId = Cards.update(userId, _id, {
                $set: {
                    completed
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardNotes(obj, { notes, _id }, { userId }) {
            const cardId = Cards.update(userId, _id, {
                $set: {
                    notes
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardArchived(obj, { archived, _id }, { userId }) {
            const cardId = Cards.update(userId, _id, {
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
            const cardId = Cards.update(userId, _id, {
                $set: {
                    pos
                }
            });
            return Cards.findOne(cardId);
        },
        // emptyTrash(obj, context) {
        //     const cardId = Cards.remove({
        //         archived: true
        //     });
        //     return Cards.find(cardId).fetch();
        // },
        createChecklist(obj, { cardId, name }, { userId }) {
            const res = Checklists.insert({
                name,
                cardId,
                userId
            });
            return Checklists.findOne(res);
        },
        updateChecklist(obj, { name, _id }, { userId }) {
            const checklistId = Checklists.update(userId, _id, {
                name
            });
            return Checklists.findOne(checklistId);
        },
        deleteChecklist(obj, { _id }, { userId }) {
            const checklistId = Checklists.remove({
                _id
            });
            return Checklists.findOne(checklistId);
        },
        createList(obj, { name }, { userId }) {
            const res = Lists.insert({
                name,
                userId
            });
            return Lists.findOne(res);
        },
        updateList(obj, { name, _id }, { userId }) {
            const listId = Lists.update(userId, _id, {
                $set: {
                    name
                }
            });
            return Lists.findOne(listId);
        },
        deleteList(obj, { _id }, context) {
            const listId = Lists.remove({
                _id
            });
            return Lists.findOne(listId);
        },
        createProject(obj, { name }, { userId }) {
            const res = Projects.insert({
                name,
                userId

            });
            return Projects.findOne(res);
        },
        updateProject(obj, { name, _id }, { userId }) {
            const projectId = Projects.update(userId, _id, {
                $set: {
                    name
                }
            });
            return Projects.findOne(projectId);
        },
        deleteProject(obj, { _id }, { userId }) {
            const projectId = Projects.remove({
                _id
            });
            return Projects.findOne(projectId);
        },
        createLabel(obj, { name }, { userId }) {
            const labelId = Labels.insert({
                name,
                userId
            });
            return Labels.findOne(labelId);
        },
        updateLabel(obj, { name, _id }, { userId }) {
            const labelId = Labels.update(userId, _id, {
                name
            });
            return Labels.findOne(labelId);
        },
        deleteLabel(obj, { _id }, { userId }) {
            const labelId = Labels.remove({
                _id
            });
            return Labels.findOne(labelId);
        }
    }
};
