import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

const schemaString = `
schema {
    query: Query
    mutation: Mutation
}

type Query {
    boards(id: ID!): Boards
    cards(id: ID!): Cards
    comment(id: ID!): [Comment]
    search(text: String): [SearchResult]
    lists(id: ID!): Lists
    projects(id: ID!): Projects
    labels(id: ID!): Labels
    checklists(id: ID!): Checklists
    members(id: ID!): Members
}

type Mutation {
    createComment(id: ID!, comment: CommentInput!): Comment
}

type Cards {
    id: ID! @isUnique
    name: String!
    checkItemStates: [String]
    archived: Boolean
    completed: Boolean
    dateLastActivity: String
    notes: String
    due: String
    createdAt: String
    pos: Float
    dueComplete: Boolean
    idBoard: Boards
    idList: Lists
    idLabels: [Labels]
    idChecklists: [Checklists]
    idMembers: [Members]
    labels: [String]
    url: String @isUnique
}

type Labels {
    id: ID! @isUnique
    idBoard: Boards
    name: String!
}

type Lists {
    id: ID! @isUnique
    name: String!
    archived: Boolean
    idBoard: Boards
    pos: Float
}

type Checkists {
    id: ID! @isUnique
    idBoard: Boards
    idCard: Cards
    name: String!
    completed: Boolean
    archived: Boolean
    pos: Float
}

type Comment {
    commentary: String
}

input CommentInput {
    commentary: String
}

type Members {
    id: ID! @isUnique
    avatarHash: String
    bio: String
    confirmed: Boolean
    email: String!
    fullName: String!
    idBoards: [Boards]
    url: String @isUnique
    username: String!
}

union SearchResult = Cards | Boards
`;

const cards = [
    {
        id: "1000",
        name: "Luke Skywalker",
        friends: ["1002", "1003", "2000", "2001"],
        appearsIn: ["NEWHOPE", "EMPIRE", "JEDI"],
        height: 1.72,
        mass: 77,
        starships: ["3001", "3003"]
    },
    {
        id: "1001",
        name: "Darth Vader",
        friends: ["1004"],
        appearsIn: ["NEWHOPE", "EMPIRE", "JEDI"],
        height: 2.02,
        mass: 136,
        starships: ["3002"]
    },
    {
        id: "1002",
        name: "Han Solo",
        friends: ["1000", "1003", "2001"],
        appearsIn: ["NEWHOPE", "EMPIRE", "JEDI"],
        height: 1.8,
        mass: 80,
        starships: ["3000", "3003"]
    },
    {
        id: "1003",
        name: "Leia Organa",
        friends: ["1000", "1002", "2000", "2001"],
        appearsIn: ["NEWHOPE", "EMPIRE", "JEDI"],
        height: 1.5,
        mass: 49,
        starships: []
    },
    {
        id: "1004",
        name: "Wilhuff Tarkin",
        friends: ["1001"],
        appearsIn: ["NEWHOPE"],
        height: 1.8,
        mass: null,
        starships: []
    }
];

const cards = [
    {
        id: "1000",
        name: "Luke Skywalker",
        friends: ["1002", "1003", "2000", "2001"],
        appearsIn: ["NEWHOPE", "EMPIRE", "JEDI"],
        height: 1.72,
        mass: 77,
        starships: ["3001", "3003"]
    },
    {
        id: "1001",
        name: "Darth Vader",
        friends: ["1004"],
        appearsIn: ["NEWHOPE", "EMPIRE", "JEDI"],
        height: 2.02,
        mass: 136,
        starships: ["3002"]
    },
    {
        id: "1002",
        name: "Han Solo",
        friends: ["1000", "1003", "2001"],
        appearsIn: ["NEWHOPE", "EMPIRE", "JEDI"],
        height: 1.8,
        mass: 80,
        starships: ["3000", "3003"]
    },
    {
        id: "1003",
        name: "Leia Organa",
        friends: ["1000", "1002", "2000", "2001"],
        appearsIn: ["NEWHOPE", "EMPIRE", "JEDI"],
        height: 1.5,
        mass: 49,
        starships: []
    },
    {
        id: "1004",
        name: "Wilhuff Tarkin",
        friends: ["1001"],
        appearsIn: ["NEWHOPE"],
        height: 1.8,
        mass: null,
        starships: []
    }
];

const starships = [
    {
        id: "3000",
        name: "Millenium Falcon",
        length: 34.37
    },
    {
        id: "3001",
        name: "X-Wing",
        length: 12.5
    },
    {
        id: "3002",
        name: "TIE Advanced x1",
        length: 9.2
    },
    {
        id: "3003",
        name: "Imperial shuttle",
        length: 20
    }
];

const starshipData = {};
starships.forEach(ship => {
    starshipData[ship.id] = ship;
});

/**
 * Helper function to get a character by ID.
 */
function getCharacter(id) {
    // Returning a promise just to illustrate GraphQL.js's support.
    return Promise.resolve(humanData[id] || droidData[id]);
}

/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
function getHero(episode) {
    if (episode === "EMPIRE") {
        // Luke is the hero of Episode V.
        return humanData["1000"];
    }
    // Artoo is the hero otherwise.
    return droidData["2001"];
}

/**
 * Allows us to query for the human with the given id.
 */
function getHuman(id) {
    return humanData[id];
}

function getStarship(id) {
    return starshipData[id];
}

const resolvers = {
    Query: {
        hero: (root, { episode }) => getHero(episode),
        character: (root, { id }) => getCharacter(id),
        human: (root, { id }) => getHuman(id),
        droid: (root, { id }) => getDroid(id),
        starship: (root, { id }) => getStarship(id),
        comments: () => null,
        search: (root, { text }) => {
            const re = new RegExp(text, "i");

            const allData = [...cards, ...boards];

            return allData.filter(obj => re.test(obj.name));
        }
    },
    Mutation: {
        createReview: (root, { episode, review }) => review
    },
    Cards: {
        friends: ({ friends }) => friends.map(getCharacter),
        appearsIn: ({ appearsIn }) => appearsIn
    },
    Droid: {
        friends: ({ friends }) => friends.map(getCharacter)
    },
    SearchResult: {
        __resolveType(data, context, info) {
            if (cardsData[data.id]) {
                return info.schema.getType("Cards");
            }
            if (boardsData[data.id]) {
                return info.schema.getType("Boards");
            }
            return null;
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs: [schemaString],
    resolvers
});

createApolloServer({ schema });
