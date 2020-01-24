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
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, " ").toUpperCase();
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
}
if (randomValue < 0.34) {
    return ROCK
} else if (randomValue < 0.67) {
    return PAPER;
} else {
    return SCISSORS
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

// const getWiner = function(compCoise, UserCoise) {
//     if (compCoise == UserCoise) {
//         return RESULT_DRAW
//     } else if (compCoise === ROCK && UserCoise === PAPER ||
//         compCoise === PAPER && UserCoise === SCISSORS ||
//         compCoise === SCISSORS && UserCoise === ROCK) {
//         return RESULT_PLAYER_WON
//     } else {
//         return RESULT_COMPUTER_WON
//     }
// }

startGameBtn.addEventListener("click", function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log({ message: "Game is starting" });
    const playerSelection = getPlayerCoise();
    console.log(playerSelection)
    const winner = getWiner(compCoise, UserCoise)
    console.log(winner)
})