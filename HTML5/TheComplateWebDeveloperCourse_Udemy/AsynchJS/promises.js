// A promise is an object that may produce a single value some time in the future
// Either a resolved value or a reason that it's not resolved (rejected)

// a promise can in in 3 different state: 
// fullfilts
// rejected 
// pending 

// before promises were implemented to the language was callbacks (when something is done, do something next)

element.addEventListener("click", submitForm);
//callback pyramid of doom
movePlayer(100, "Left", function() {
    movePlayer(400, "Left", function() {
        movePlayer(10, "Right", function() {
            movePlayer(40, "Left", function() {})
        })
    })
})

// the same solution with promisses 
movePlayer(100, "Left")
    .then(() => movePlayer(400, "Left"))
    .then(() => movePlayer(400, "Left"))
    .then(() => movePlayer(400, "Left"))


//How to create Promise 
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("stuff Worked")
    } else {
        reject("Error, its broken")
    }
})

promise.then(result => console.log(result));

promise.then(result => result + "!")
    .then(result2 => console.log(result2))

promise
    .then(result => result + "!")
    .then(result2 => {
        throw Error
        console.log(result2)
    })
    .catch(console.log)

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hiii")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Bye")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Heloo")
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })


//Real Live Example if Promise usage 

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log("Error"))