const Rooster = require('./index.js');
const assert = require('assert');

describe("Rooster", () => {
    describe(".annouceDawn", () => {
        it("returns a rooster call", () => {
            // this is my test setup
            const prediction = 'moo!';

            // this is my test exercise
            const announcement = Rooster.announceDawn();

            // this is my test verification
            assert.strictEqual(announcement, prediction);
        });
    });

    describe(".timeAtDawn", () => {
        it("returns hours between 0 and 23 as string", () => {
            //setup
            /*  the commented code are extension tasks i wanted to test ouut;
                 const convertTimeToString = () => {
                 let time = 0;
                 let endTime = 23;
                 let numberArray = [];
                 for (time = 0; time <= endTime; time++) {
                     let timeInString = `'${time}'`;
                     numberArray.push(timeInString);
                 }
                 return numberArray;
             }; */
            const timeAtDawnInString = () => {
                let time = 0;
                let endTime = 23;
                let numberArray = [];
                for (time = 0; time <= endTime; time++) {
                    let result = Rooster.timeAtDawn(time);
                    numberArray.push(result);
                }
                return numberArray;
            };
            /* const timeInString = convertTimeToString(); */
            const prediction = 'string';
            //exercice
            const timeAtDawn = timeAtDawnInString();
            //verification
            for (let i = 0; i <= 23; i++) {
                assert.ok(typeof timeAtDawn[i] === prediction);
            }
        })
        it('throws an error if passed a number less than 0', () => {
            //setup
            const testValue = -3;

            //verification
            assert.throws(() => {
                Rooster.timeAtDawn(testValue);
            },
                RangeError,
                `Range Error was thrown for ${testValue}`)
        })
        it('throws an error if passed a number less than 23', () => {
            //setup
            const testValue = 24;

            //verification
            assert.throws(() => {
                Rooster.timeAtDawn(testValue);
            },
                RangeError,
                `Range Error was thrown for ${testValue}`)
        })
    })
});