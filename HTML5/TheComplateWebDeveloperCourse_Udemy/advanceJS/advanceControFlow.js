// ternary operator
// syntax:
// condition ? expr1 : exper2
// Is condition true or false ?
// If its true bring me expr1
// if its false show me expr2

function isUserValid(bool) {
    return bool;
}

let answer = isUserValid(true) ? "You may enter" : "Access Denied"

let automatedAnswer = "yourAccount number is" + (isUserValid(false)) ? "1234" : "not avalible"

function condition() {
    if (isUserValid(true)) {
        return "you may enter";
    } else {
        return "Access denied"
    }
}

var answer2 = condition();

//switch 
function moveCommand(direction) {
    let whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a rived";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "Please enter a valid direction"
    }
    return whatHappens;
}