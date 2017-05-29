const { GraphQLSchema } = require('graphql');
const { queryType } = require('../query/query');
const { mutationType } = require('../mutation/types');

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

module.exports = schema;
