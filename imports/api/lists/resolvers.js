import { Lists, Projects } from "./lists";
import { Cards } from "../cards/cards";

export default {
    Query: {
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

    List: {
        cards: list =>
            Cards.find({
                listId: list._id,
                $and: [
                    { completed: { $eq: false } },
                    { archived: { $eq: false } }
                ]
            }).fetch()
    },

    Project: {
        cards: project =>
            Cards.find({
                projectId: project._id,
                $and: [
                    { completed: { $eq: false } },
                    { archived: { $eq: false } }
                ]
            }).fetch()
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
            const res = Lists.update(_id, {
                $set: {
                    name
                }
            });
            return Lists.findOne(res);
        },
        deleteList(obj, { _id }, context) {
            const res = Lists.remove({
                _id
            });
            return Lists.findOne(res);
        },
        createProject(obj, { name }, { userId }) {
            const res = Projects.insert({
                name,
                userId
            });
            return Projects.findOne(res);
        },
        updateProject(obj, { name, _id }, { userId }) {
            const projectId = Projects.update(_id, {
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
