const express = require("express");
const path = require("path");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray = loadFilesSync("**/*.graphql");
const resolversArray = loadFilesSync("**/*.resolver.js");

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const root = {
  description: () => "GraphQL Server",
  price: () => 100,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("GraphQL Server is running on port 3000");
});
