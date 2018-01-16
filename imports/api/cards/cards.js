import { mongo } from "meteor/mongo";

const Cards = new Mongo.Collection("cards");
const Checklists = new Mongo.Collection("checklists");
const Labels = new Mongo.Collection("labels");
const Lists = new Mongo.Collection("lists");
const Projects = new Mongo.Collection("projects");

export { Cards, Checklists, Labels, Lists, Projects };
