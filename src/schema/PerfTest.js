const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLUnionType,
} = require('graphql');

const OrderCreationMetricsType = new GraphQLObjectType({
    name: 'OrderCreationMetrics',
    description: 'Metrics for Order Creation Test result',
    fields: {
        minTransactionTime: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The mininum time spent in the order creation transaction',

        }
    }
})

const MetricsType = new GraphQLUnionType({
    name: 'Metrics',
    description: 'Test Result Metrics',
    types: [OrderCreationMetricsType],
    resolveType(value) {
        if(value instanceof OrderCreationMetricsType) {
            return OrderCreationMetricsType;
        }
    }
})

exports.MetricsType = MetricsType
