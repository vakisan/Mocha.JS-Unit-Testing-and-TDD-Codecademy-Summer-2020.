//uses recursion which is more readable than iterative version in my opinion

const Calculate = {
    factorial(inputNumber) {
        try {
            if (inputNumber === 0) {
                return 0;
            }
            else if (inputNumber === 1) {
                return 1;
            }
            return inputNumber * this.factorial(inputNumber - 1);
        }
        catch (error) {
            throw new Error("0 Factorial is 0");
        }
    }
}

module.exports = Calculate;


