const B = require('./B').A;
const A = require('./A').B;

module.exports = function test() {
    A.test();
    B.test();
}