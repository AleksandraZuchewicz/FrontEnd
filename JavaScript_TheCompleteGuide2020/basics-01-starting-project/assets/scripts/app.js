const defaultResultValue = 0;
let currentResult = defaultResultValue;

function add() {
    const enteredNumber = parseInt(usrInput.value)
    const calcDescryption = `${currentResult}+${enteredNumber}`
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescryption);
}


addBtn.addEventListener("click", add)