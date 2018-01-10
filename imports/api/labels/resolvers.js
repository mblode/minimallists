import Labels from "./labels";

export default {
    Query: {
        labels() {
            return Labels.find({}).fetch();
        }
    },

    Mutation: {
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
