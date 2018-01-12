import { mongo } from "meteor/mongo";

const Cards = new Mongo.Collection("cards");
const Checklists = new Mongo.Collection("checklists");
const Labels = new Mongo.Collection("labels");
const Lists = new Mongo.Collection("lists");
const Projects = new Mongo.Collection("projects");
const Areas = new Mongo.Collection("areas");

export { Cards, Checklists, Labels, Lists, Projects, Areas };
