const { makeExecutableSchema } = require("@graphql-tools/schema");
const { resolvers, typeDefs } = require("./schema");

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = {
    schema,
};
