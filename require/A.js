const A = require('./A').A;

class B {
    static test() {
        console.log(A);
    }
}

module.exports = {B};