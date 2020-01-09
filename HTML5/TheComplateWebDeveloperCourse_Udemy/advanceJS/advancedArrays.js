const array = [1, 2, 10, 40];

const double = []
const newArray = array.forEach(num => {

    double.push(num * 2);
});
console.log(double);

//The most inportant arrays methods: 

//map: in map you always needs to return something => new array

const mapArray = array.map(num => num * 3)
console.log(mapArray)


// filter - filter an array with a condition 

const filterArray = array.filter(num => {
    return num > 5
})
console.log(filterArray)

// reduce 
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)

console.log("reduce", reduceArray);