const { typeDef: MutationDef, mutationResolvers } = require("./Mutation");
const { typeDef: QueryDef, queryResolvers } = require("./Query");
const { typeDef: UserDef } = require("./User");

module.exports = {
    typeDefs: [QueryDef, UserDef, MutationDef],
    resolvers: {
        Query: queryResolvers,
        Mutation: mutationResolvers,
    },
};
