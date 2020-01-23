const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const GAME_OVER = "GAME_OVER"




const enteredValue = prompt("maximum life for you and moster: ", "100");

let chosenMaxLife = parseInt(enteredValue);
let battleLog = []
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;


adjustHealthBars(chosenMaxLife);

function writeLog(event, value, finalMonsterHealth, finalPlayerHealth) {
    let logEntry;
    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: "MONSTER",
            finalMonsterHealth: finalMonsterHealth,
            finalPlayerHealth: finalPlayerHealth,
        }
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: "MONSTER",
            finalMonsterHealth: finalMonsterHealth,
            finalPlayerHealth: finalPlayerHealth,
        }
    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: "PLAYER",
            finalMonsterHealth: finalMonsterHealth,
            finalPlayerHealth: finalPlayerHealth
        }
    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: event,
            value: value,
            target: "PLAYER",
            finalMonsterHealth: finalMonsterHealth,
            finalPlayerHealth: finalPlayerHealth
        }
    } else if (event === GAME_OVER) {
        {
            logEntry = {
                event: event,
                value: value,
                target: "PLAYER",
                finalMonsterHealth: finalMonsterHealth,
                finalPlayerHealth: finalPlayerHealth
            }
        }
    }
    battleLog.push(logEntry)
}


if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife)

}

function endRound() {
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth)

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLive();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth)
        alert("You would be dead, but the bonus live saved your life");

    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        reset()
        writeLog(GAME_OVER, "Player Won", currentMonsterHealth, currentPlayerHealth)
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        reset()
        writeLog(GAME_OVER, "Monster Won", currentMonsterHealth, currentPlayerHealth)
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
        reset()
        writeLog(GAME_OVER, "A draw", currentMonsterHealth, currentPlayerHealth)
    }
}

function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
    writeLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth)
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth)
    endRound();

}

function printLogHandler() {
    console.log(battleLog)
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener("click", printLogHandler)