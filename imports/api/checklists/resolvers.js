import Checklists from "./checklists";

export default {
    Query: {
        checklists() {
            return Checklists.find({}).fetch();
        }
    },

    Mutation: {
        createChecklist(obj, { name }, context) {
            const checklistId = Checklists.insert({
                name
            });
            return Checklists.findOne(checklistId);
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
        }
    }
};
