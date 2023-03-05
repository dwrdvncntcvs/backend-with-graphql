const express = require("express");
const eGql = require("express-graphql");
const { schema } = require("./graphql");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const mongoURI = "mongodb://127.0.0.1:27017/sample-gql-db";

const mongoConnection = async () => {
    mongoose.set({
        strictQuery: true,
    });
    await mongoose.connect(mongoURI);
    console.log(`-- Mongo URI: ${mongoURI} --`);
};

app.use(
    "/graphql",
    eGql.graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(PORT, async () => {
    console.log("-- GraphQL Server running... --");
    console.log(`-- @PORT: ${PORT} --`);
    await mongoConnection();
});
