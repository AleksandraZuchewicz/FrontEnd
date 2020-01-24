const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USERS_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WON = "PLAYER WON";
const RESULT_COMPUTER_WON = "COMPUTER WON";

let gameIsRunning = false;

const getPlayerCoise = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice, We chose ${DEFAULT_USERS_CHOICE} for You!`);
        return DEFAULT_USERS_CHOICE;
    }
    return selection
}

const getComputerChice = function() {
    const randomValue = Math.random()

    if (randomValue < 0.34) {
        return ROCK
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS
    }
}

const getWiner = (compCoise, UserCoise) => {
    return compCoise == UserCoise ?
        RESULT_DRAW :
        compCoise === ROCK && UserCoise === PAPER ||
        compCoise === PAPER && UserCoise === SCISSORS ||
        compCoise === SCISSORS && UserCoise === ROCK ?
        RESULT_PLAYER_WON :
        RESULT_COMPUTER_WON

}


startGameBtn.addEventListener("click", function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log({ message: "Game is starting" });
    const userChoise = getPlayerCoise();
    console.log(userChoise)
    const computerChoise = getComputerChice()
    let winner = getWiner(computerChoise, userChoise)
    console.log(winner)

    let message;
    if (winner === RESULT_DRAW) {
        message = `You picked ${userChoise}, computer choice ${computerChoise}, therefore you have a drow`
    } else if (winner === RESULT_PLAYER_WON) {
        message = `You picked ${userChoise}, computer choice ${computerChoise}, therefore you have won`
    } else {
        message = `You picked ${userChoise}, computer choice ${computerChoise}, therefore you lost`
    }
    alert(message);
    gameIsRunning = false;

})