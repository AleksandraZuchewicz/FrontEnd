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

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType == "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+"
    } else if (calculationType == "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-"
    } else if (calculationType == "MULTYPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*"
    } else {
        currentResult /= enteredNumber;
        mathOperator = "/"
    }
    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}


function add() {
    calculateResult("ADD")
}

function subtract() {
    calculateResult("SUBTRACT")
}

function multiply() {
    calculateResult("MULTYPLY")
}

function divide() {
    calculateResult("DIVIDE")
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);