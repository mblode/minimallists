import { Labels } from "./labels";

export default {
    Query: {
        labels(obj, { _id }, { userId }) {
            return Labels.find({}).fetch();
        }
    },

    Mutation: {
        createLabel(obj, { name }, { userId }) {
            const labelId = Labels.insert({
                name,
                userId
            });
            return Labels.findOne(labelId);
        },
        updateLabel(obj, { name, _id }, { userId }) {
            const labelId = Labels.update(_id, {
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
