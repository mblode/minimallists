import { Checklists } from "./checklists";

export default {
    Mutation: {
        createChecklist(obj, { name, cardId }, { userId }) {
            const res = Checklists.insert({
                name,
                cardId,
                completed: false
            });
            return Checklists.findOne(res);
        },
        updateChecklist(obj, { name, _id }, { userId }) {
            const checklistId = Checklists.update(_id, {
                $set: {
                    name
                }
            });
            return Checklists.findOne(checklistId);
        },
        updateChecklistCompleted(obj, { completed, _id }, { userId }) {
            const checklistId = Checklists.update(_id, {
                $set: {
                    completed
                }
            });
            return Checklists.findOne(checklistId);
        },
        deleteChecklist(obj, { _id }, { userId }) {
            const checklistId = Checklists.remove({
                _id
            });
            return Checklists.findOne(checklistId);
        }
    }
};
