const { csv } = require('./fixture.js');

const testPlans = [
    {
        id: 't-a',
        name: 'test plan #0',
        results: [
            {
                id: 'a-1',
                data: csv
            },
            {
                id: 'a-2',
                data: csv
            },
            {
                id: 'a-3',
                data: csv
            }
        ]
    },
    {
        id: 't-b',
        name: 'test plan #1',
        results: [
            {
                id: 'b-1',
                data: csv
            },
            {
                id: 'b-2',
                data: csv
            },
            {
                id: 'b-3',
                data: csv
            }
        ]
    },
    {
        id: 't-c',
        name: 'test plan #2',
        results: [
            {
                id: 'c-1',
                data: csv
            },
            {
                id: 'c-2',
                data: csv
            },
            {
                id: 'c-3',
                data: csv
            }
        ]
    },
]

exports.testPlans = testPlans
