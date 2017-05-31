const {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLUnionType,
    GraphQLFloat,
} = require('graphql');
const {
    MetricsType
} = require('./PerfTest');

const nodeInterface = require('./interfaces');

const testResult = new GraphQLObjectType({
    name: 'TestResult',
    description: 'The test result',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the test result',
        },
        date: {
            type: new GraphQLNonNull(GraphQLFloat),
            description: 'The time when the test result is added. Epoch time in millisec.'
        },
        metrics: {
            type: MetricsType,
            description: 'The metrics of the test results'
        },
        isArchived: {
            type: GraphQLBoolean,
            description: 'Whether the test result is archived'
        }
    }
})

const testPlanType = new GraphQLObjectType({
    name: 'TestPlan',
    description: 'A Test Plan',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the test plan'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the test plan'
        },
        results: {
            type: new GraphQLList(testResult),
            description: 'The test results in the test plan'
        },
        isArchived: {
            type: GraphQLBoolean,
            description: 'Whether the test plan is archived'
        }
    }
})

exports.testPlanType = testPlanType;
