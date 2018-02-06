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
        updateChecklistName(obj, { name, _id }, { userId }) {
            const res = Checklists.update(_id, {
                $set: {
                    name
                }
            });
            return Checklists.findOne(res);
        },
        updateChecklistCompleted(obj, { completed, _id }, { userId }) {
            const res = Checklists.update(_id, {
                $set: {
                    completed
                }
            });
            return Checklists.findOne(res);
        },
        deleteChecklist(obj, { _id }, { userId }) {
            const res = Checklists.remove({
                _id
            });
            return Checklists.findOne(res);
        }
    }
};
