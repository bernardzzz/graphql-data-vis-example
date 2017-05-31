const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');
const { testPlanType } = require('../schema/types');
const {
    getTestPlans,
    getTestPlanById,
} = require('../resolver/resolvers');


const rootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'The root query Type',
    fields: {
        testPlans: {
            type: new GraphQLList(testPlanType),
            resolve: getTestPlans,
        },
        testPlan: {
            type: testPlanType,
            args:{
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                    description: 'The id of testPlan'
                }
            },
            resolve: getTestPlanById,
            reject: getTestPlanById,
        }
    }
})

exports.queryType = rootQueryType;
