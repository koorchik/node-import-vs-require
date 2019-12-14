const B = require('./B').B;

class A {
    static test() {
        console.log(B);
    }
}

module.exports = {A};