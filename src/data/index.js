const { csv } = require('./fixture.js');

const testPlans = [
    {
        id: 't-a',
        name: 'test plan #0',
        results: [
            {
                id: 'a-1',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            },
            {
                id: 'a-2',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            },
            {
                id: 'a-3',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            }
        ],
        isArchived: false,
    },
    {
        id: 't-b',
        name: 'test plan #1',
        results: [
            {
                id: 'b-1',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            },
            {
                id: 'b-2',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            },
            {
                id: 'b-3',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            }
        ],
        isArchived: false,
    },
    {
        id: 't-c',
        name: 'test plan #2',
        results: [
            {
                id: 'c-1',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            },
            {
                id: 'c-2',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            },
            {
                id: 'c-3',
                date: new Date().getTime(),
                isArchived: false,
                data: csv
            }
        ],
        isArchived: false,
    },
]

exports.testPlans = testPlans
