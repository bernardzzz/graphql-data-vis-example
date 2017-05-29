const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');
const { videoType } = require('../schema/types');
const {
    getVideos,
    getVideoById,
} = require('../resolver/resolvers');

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    videos: {
      type: new GraphQLList(videoType),
      resolve: getVideos,
    },
    video: {
      type: videoType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the video.',
        },
      },
      resolve: (_, args) => {
        return getVideoById(args.id);
      },
    },
  },
});

exports.queryType = queryType;
