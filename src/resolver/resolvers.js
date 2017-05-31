const { testPlans } = require('../data');

const getTestPlans = () => new Promise( resolve => resolve(testPlans));
const getTestPlanById = (_, args) => new Promise( (resolve, reject) => {
    const testPlan = testPlans.find( p => p.id === args.id);
    if(testPlan) {
        return resolve(testPlan)
    } else {
        return reject('cannot find any test plan with id ' + args.id)
    }
})

exports.getTestPlans = getTestPlans;
exports.getTestPlanById = getTestPlanById;
