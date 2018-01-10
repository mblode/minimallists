import Lists from "./lists";

export default {
    Query: {
        lists() {
            return Lists.find({}).fetch();
        }
    },

    Mutation: {
        createList(obj, { name }, context) {
            const listId = Lists.insert({
                name
            });
            return Lists.findOne(listId);
        },
        updateList(obj, { name, _id }, context) {
            const listId = Lists.update(_id, {
                name
            });
            return Lists.findOne(listId);
        },
        deleteList(obj, { _id }, context) {
            const listId = Lists.remove({
                _id
            });
            return Lists.findOne(listId);
        },
        createProject(obj, { name }, context) {
            const projectId = Projects.insert({
                name
            });
            return Projects.findOne(projectId);
        },
        updateProject(obj, { name, _id }, context) {
            const projectId = Projects.update(_id, {
                name
            });
            return Projects.findOne(projectId);
        },
        deleteProject(obj, { _id }, context) {
            const projectId = Projects.remove({
                _id
            });
            return Projects.findOne(projectId);
        },
        createArea(obj, { name }, context) {
            const areaId = Areas.insert({
                name
            });
            return Areas.findOne(areaId);
        },
        updateArea(obj, { name, _id }, context) {
            const areaId = Areas.update(_id, {
                name
            });
            return Areas.findOne(areaId);
        },
        deleteArea(obj, { _id }, context) {
            const areaId = Areas.remove({
                _id
            });
            return Areas.findOne(areaId);
        }
    }
};
