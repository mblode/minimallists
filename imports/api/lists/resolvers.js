import { Lists, Projects } from "./lists";

export default {
    Query: {
        lists(obj, { _id }, { userId }) {
            return Lists.find({ userId }).fetch();
        },
        projects(obj, { _id }, { userId }) {
            return Projects.find({ userId }).fetch();
        }
    },

    Mutation: {
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
        }
    }
};
