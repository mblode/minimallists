import { mongo } from "meteor/mongo";

const Cards = new Mongo.Collection("cards");

export { Cards, Labels };
