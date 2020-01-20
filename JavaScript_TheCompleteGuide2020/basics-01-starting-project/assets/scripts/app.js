const defaultResultValue = 0;
let currentResult = defaultResultValue;

function getUserNumberInput() {
    return parseInt(usrInput.value)
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescryption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescryption);
}


function add() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteLog("+", initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteLog("-", initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog("*", initialResult, enteredNumber)
}

function devide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog("/", initialResult, enteredNumber)
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
devideBtn.addEventListener("click", devide);