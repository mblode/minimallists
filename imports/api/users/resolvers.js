// import { User } from "./user";

export default {
    Query: {
        user(obj, { _id }, { user }) {
            return user || {};
        }
    },

    User: {
        email: user => user.emails[0].address
    }
};
