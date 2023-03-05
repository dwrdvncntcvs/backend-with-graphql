const { create, updateUser, deleteUser } = require("../../models/User");

const typeDef = `
    type Mutation {
        createUser(user: CreateUser): User
        updateUser(id: String, user: UpdateUser): User
        deleteUser(id: String): DeleteUser
    }
`;

const mutationResolvers = {
    createUser: async (_, { user }) => {
        const { username } = user;
        const createdUser = await create({ username });
        return createdUser;
    },
    updateUser: async (_, { id, user }) => {
        const updatedUser = await updateUser(id, user);

        return updatedUser;
    },
    deleteUser: async (_, { id }) => {
        await deleteUser(id);
        return { message: `User with "${id}" was deleted successfully` };
    },
};

module.exports = {
    typeDef,
    mutationResolvers,
};
