var assert = require("assert");
var Calculate = require('./FactorialFeature.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it("computes the factorial of 5", () => {
            //setup
            const inputNumber = 5;
            const predicted = 120;
            //exercise
            const factorialresult = Calculate.factorial(inputNumber)
            //verification
            assert.strictEqual(factorialresult, predicted);
        })
        it("computes the factorial of 3", () => {
            //setup
            const inputNumber = 3;
            const predicted = 6;
            //exercise
            const factorialresult = Calculate.factorial(inputNumber)
            //verification
            assert.strictEqual(factorialresult, predicted);
        })
        it("computes the factorial of 0 -- EDGE CASE", () => {
            //setup
            const inputNumber = 0;
            const predicted = 0;
            //exercise
            const factorialresult = Calculate.factorial(inputNumber)
            //verification
            assert.strictEqual(factorialresult, predicted);
        })
    });
});