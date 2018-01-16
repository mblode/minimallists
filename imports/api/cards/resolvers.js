import { Cards, Checklists, Labels, Lists, Projects } from "./cards";

export default {
    Query: {
        card: async (root, { _id }) => {
            return await Cards.findOne(_id);
        },
        cards: async () => {
            return await Cards.find({}).fetch();
        },
        checklist: async (root, { _id }) => {
            return await Checklists.findOne(_id);
        },
        checklists: async (root, { _id }) => {
            return await Checklists.find({}).fetch();
        },
        labels: async () => {
            return await Labels.find({}).fetch();
        },
        list: async (root, { _id }) => {
            return await Lists.findOne(_id);
        },
        lists: async () => {
            return await Lists.find({}).fetch();
        },
        project: async (root, { _id }) => {
            return await Projects.findOne(_id);
        },
        projects: async () => {
            return await Projects.find({}).fetch();
        }
    },

    Card: {
        checklists: async ({ _id }) => {
            return await Checklists.find({ cardId: _id }).fetch();
        }
    },

    Checklist: {
        card: async ({ cardId }) => {
            return prepare(await Cards.findOne(ObjectId(cardId)));
        }
    },

    Mutation: {
        createCard: async (root, args, context, info) => {
            const res = Cards.insert(args);
            return Cards.findOne(res);
        },
        updateCard(obj, { name, _id }, context) {
            const cardId = Cards.update(_id, {
                $set: {
                    name
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardCompleted(obj, { completed, _id }, context) {
            const cardId = Cards.update(_id, {
                $set: {
                    completed
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardNotes(obj, { notes, _id }, context) {
            const cardId = Cards.update(_id, {
                $set: {
                    notes
                }
            });
            return Cards.findOne(cardId);
        },
        updateCardArchived(obj, { archived, _id }, context) {
            const cardId = Cards.update(_id, {
                $set: {
                    archived
                }
            });
            return Cards.findOne(cardId);
        },
        deleteCard(obj, { _id }, context) {
            const cardId = Cards.remove({
                _id
            });
            return Cards.findOne(cardId);
        },
        // emptyTrash(obj, context) {
        //     const cardId = Cards.remove({
        //         archived: true
        //     });
        //     return Cards.find(cardId).fetch();
        // },
        createChecklist: async (root, args) => {
            const res = Checklists.insert(args);
            return Checklists.findOne(res);
        },
        updateChecklist(obj, { name, _id }, context) {
            const checklistId = Checklists.update(_id, {
                name
            });
            return Checklists.findOne(checklistId);
        },
        deleteChecklist(obj, { _id }, context) {
            const checklistId = Checklists.remove({
                _id
            });
            return Checklists.findOne(checklistId);
        },
        createList: async (root, args) => {
            const res = Lists.insert(args);
            return Lists.findOne(res);
        },
        updateList(obj, { name, _id }, context) {
            const listId = Lists.update(_id, {
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
        createProject: async (root, args) => {
            const res = Projects.insert(args);
            return Projects.findOne(res);
        },
        updateProject(obj, { name, _id }, context) {
            const projectId = Projects.update(_id, {
                $set: {
                    name
                }
            });
            return Projects.findOne(projectId);
        },
        deleteProject(obj, { _id }, context) {
            const projectId = Projects.remove({
                _id
            });
            return Projects.findOne(projectId);
        },
        createLabel(obj, { name }, context) {
            const labelId = Labels.insert({
                name
            });
            return Labels.findOne(labelId);
        },
        updateLabel(obj, { name, _id }, context) {
            const labelId = Labels.update(_id, {
                name
            });
            return Labels.findOne(labelId);
        },
        deleteLabel(obj, { _id }, context) {
            const labelId = Labels.remove({
                _id
            });
            return Labels.findOne(labelId);
        }
    }
};
