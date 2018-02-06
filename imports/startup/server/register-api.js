import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import CardsSchema from "../../api/cards/Cards.graphql";
import CardsResolvers from "../../api/cards/resolvers";
import UsersSchema from "../../api/users/User.graphql";
import UsersResolvers from "../../api/users/resolvers";
import ListsSchema from "../../api/lists/Lists.graphql";
import ListsResolvers from "../../api/lists/resolvers";
import ChecklistsSchema from "../../api/checklists/Checklists.graphql";
import ChecklistsResolvers from "../../api/checklists/resolvers";
import LabelsSchema from "../../api/labels/Labels.graphql";
import LabelsResolvers from "../../api/labels/resolvers";

// lllllllllll

const typeDefs = [
    CardsSchema,
    UsersSchema,
    ListsSchema,
    ChecklistsSchema,
    LabelsSchema
];

const resolvers = merge(
    CardsResolvers,
    UsersResolvers,
    ListsResolvers,
    ChecklistsResolvers,
    LabelsResolvers
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });
