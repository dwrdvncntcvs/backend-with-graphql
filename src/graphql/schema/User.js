const typeDef = `
    type User {
        id: String,
        username: String,
        created_at: String,
        updated_at: String,
    }

    input CreateUser {
        username: String
    }

    input UpdateUser {
        username: String
    }

    type DeleteUser {
        message: String
    }
`;

module.exports = {
    typeDef,
};
