const basket = ["apples", "oranges", "grapes"]

// for of 
//Iterating - able to go one by one and look at these items, you can iterate over arrays and strings
for (item of basket) {
    console.log(item)
}
//apples
//oranges
//grapes

for (item of "basket") {
    console.log(item)
}

// b
// a
// s
// k
// e
// t


// for in - works with objects 
//enumerating - for objects
let objectBasket = {
    oranges: 10,
    apples: 5,
    grapes: 100
}

for (item in objectBasket) {
    console.log(item)
}