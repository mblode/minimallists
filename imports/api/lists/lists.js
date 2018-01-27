import { mongo } from "meteor/mongo";

const Lists = new Mongo.Collection("lists");
const Projects = new Mongo.Collection("projects");

export { Lists, Projects };
