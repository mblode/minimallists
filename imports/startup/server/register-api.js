import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import CardSchema from "../../api/cards/Cards.graphql";

import CardResolvers from "../../api/cards/resolvers";

// hedddddddddddddddsddsssdd
const typeDefs = [CardSchema];

const resolvers = merge(CardResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });
