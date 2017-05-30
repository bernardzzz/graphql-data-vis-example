const Promise = require('bluebird');
const readFile = Promise.promisify(require('fs').readFile);
const parse = Promise.promisify(require('csv-parse'));

let csv

readFile('./src/data/data.csv')
    .then(content => parse(content))
    .then(output => {
        csv = output.map((record, idx, array) => {
            return record.reduce((acc, item, itemIdx) => {
                acc[array[0][itemIdx]] = item;
                return acc
            }, {})
        })
        csv.shift()
    })
    .catch(err => {
        console.log(err);
    });

exports.data = csv
