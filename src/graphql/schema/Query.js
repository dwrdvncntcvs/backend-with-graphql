const users = require("../../mock/user");
const { findAllUsers } = require("../../models/User");

const typeDef = `
    type Query {
        users : [User],
        user(id: String): User
    }
`;

const queryResolvers = {
    users: async () => await findAllUsers(),
    user: (_, { id }) => {
        const user = users.find((user) => user.id === id);

        if (!user) throw new Error(`User with an id of "${id}" couldn't found`);

        return user;
    },
};

module.exports = {
    typeDef,
    queryResolvers,
};
