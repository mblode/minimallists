import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import CardSchema from "../../api/cards/Cards.graphql";
import ChecklistSchema from "../../api/checklists/Checklists.graphql";
import LabelSchema from "../../api/labels/Labels.graphql";
import ListSchema from "../../api/lists/Lists.graphql";

import CardResolvers from "../../api/cards/resolvers";
import ChecklistResolvers from "../../api/checklists/resolvers";
import LabelResolvers from "../../api/labels/resolvers";
import ListResolvers from "../../api/lists/resolvers";

// helll
const testSchema = `
type Query {
    cards: [Card]
    checklists: [Checklist]
    labels: [Label]
    lists: [List]
}
`;

const typeDefs = [
    testSchema,
    CardSchema,
    ChecklistSchema,
    LabelSchema,
    ListSchema
];

const resolvers = merge(
    CardResolvers,
    ChecklistResolvers,
    LabelResolvers,
    ListResolvers
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });
