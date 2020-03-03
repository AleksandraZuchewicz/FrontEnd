//even or odd

function isEvenOrOdd(number) {
    const result = number % 2;
    if (result == 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}
// with turnary operator 

function isEvenOrOdd2(number) {
    return number % 2 ? 'Odd' : 'Even'
}
console.log(isEvenOrOdd(10)) // 'Even'
console.log(isEvenOrOdd(11)) // 'Odd'


console.log(isEvenOrOdd2(10)) // 'Even'
console.log(isEvenOrOdd2(11)) // 'Odd'