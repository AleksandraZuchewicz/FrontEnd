// What is algorithm?
// Its a sequence of steps to change the input for expected output.
// Data Structure: Piece of data which followers of certain rules

//alg 1 wit for loop 

function getMin(number) {
    if (!testNumbers.length) {
        throw new Error("Array is empty")
    }
    if (number.length === 1) {
        return number[0]
    }
    let currentMin = number[0];
    for (let i = 1; i < testNumbers.length; i++) {
        if (number[i] < currentMin) {
            currentMin = number[i]
        }
    }

    return currentMin;

}

const testNumbers = [3, 1, 2]
const min = getMin(testNumbers);
console.log(min)

// sor 2 with sorting method 

function getMinWithSort(number) {
    if (!testNumbers.length) {
        throw new Error("Array is empty")
    }
    let sortedNumbers;
    for (let i = 0; i < testNumbers.length; i++) {
        let outerElement = number[1]
        for (let j = i + 1; j < number.length; j++) {
            let innerElement = number[j]
            if (outerElement > innerElement) {
                number[i] = innerElement;
                number[j] = outerElement;

                outerElement = number[i];
                innerElement = number[j]

            }

        }
    }

    return number[0];

}
console.log(getMinWithSort([10, 60, -8, 6]))