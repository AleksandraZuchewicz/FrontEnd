const defaultResultValue = 0;
let currentResult = defaultResultValue;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(usrInput.value)
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescryption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescryption);

}

function writeToLog(operationId, prevResult, operationalNumber, newResult) {
    const logEntry = {
        operation: operationId,
        prevResult: prevResult,
        number: operationalNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries)
}


function add() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteLog("+", initialResult, enteredNumber);
    writeToLog("ADD", initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteLog("-", initialResult, enteredNumber);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog("*", initialResult, enteredNumber);
    writeToLog("MULTYPLY", initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog("/", initialResult, enteredNumber);
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult)
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);