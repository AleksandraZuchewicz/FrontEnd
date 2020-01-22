const ATTACK_VALUE = 10;
const MONSTER_ATTACT = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let maximumLife = 100;
let currentMonsterHealth = maximumLife;
let currentPlayerHealth = maximumLife;
adjustHealthBars(maximumLife);

function attacktFuntion(valueAttack) {
    const damage = dealMonsterDamage(valueAttack);
    currentMonsterHealth -= damage;
    const playerDemage = dealPlayerDamage(MONSTER_ATTACT);
    currentPlayerHealth -= playerDemage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You Won !!!");
    } else if (currentPlayerHealth <= 0) {
        alert("You lost!");
    } else if (currentPlayerHealth <= 0 && currentPlayerHealth <= 0) {
        alert("You have a drow!");

    }
}

function endRound() {
    const playerDemage = dealPlayerDamage(MONSTER_ATTACT);
    currentPlayerHealth -= playerDemage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You Won !!!");
    } else if (currentPlayerHealth <= 0) {
        alert("You lost!");
    } else if (currentPlayerHealth <= 0 && currentPlayerHealth <= 0) {
        alert("You have a drow!");

    }
}

function attackHandler() {
    attacktFuntion(MONSTER_ATTACT)
}

function strongAttackHandler() {
    attacktFuntion(STRONG_ATTACK_VALUE)
}

function healHandler() {
    increasePlayerHealth(HEAL_VALUE);



}

attackBtn.addEventListener("click", attackHandler)
strongAttackBtn.addEventListener("click", strongAttackHandler)
healBtn.addEventListener("click", healHandler)