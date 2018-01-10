import Cards from "./cards";

export default {
    Query: {
        cards() {
            return Cards.find({}).fetch();
        }
    },

    Mutation: {
        createCard(obj, { name }, context) {
            const cardId = Cards.insert({
                name
            });
            return Cards.findOne(cardId);
        },
        updateCard(obj, { name, _id }, context) {
            const cardId = Cards.update(_id, {
                name
            });
            return Cards.findOne(cardId);
        },

        deleteCard(obj, { _id }, context) {
            const cardId = Cards.remove({
                _id
            });
            return Cards.findOne(cardId);
        }
    }
};
