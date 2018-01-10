import { mongo } from "meteor/mongo";

const Checklists = new Mongo.Collection("checklists");

export default Checklists;
