const {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID,
} = require('graphql');
const nodeInterface = require('./interfaces');

const videoType = new GraphQLObjectType({
  name: 'Video',
  description: 'A video on Egghead.io',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of the video.',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the video.',
    },
    duration: {
      type: GraphQLInt,
      description: 'The duration of the video (in seconds).',
    },
    released: {
      type: GraphQLBoolean,
      description: 'Whether or not the video has been released.',
    },
  },
  interfaces: [nodeInterface],
});
exports.videoType = videoType;
