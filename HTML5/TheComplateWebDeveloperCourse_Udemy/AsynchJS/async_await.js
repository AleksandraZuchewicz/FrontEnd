// Async Await its part of ES8 and its build on top of promises. 
//Async function is a function that returns a promise 

//async await example 
//Ex 1 
async function playerStart() {
    const firstMove = await movePlayer(100, "left");
    await movePlayer(400, "Left");
    await movePlayer(10, "Right");
    await movePlayer(100, "Left");
}

// Ex 2
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(console.log)

// fetch chenged fir async await function 
// Ex 3
async function fetchUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json()
    console.log(data)
}

//Ex 4 
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]


const getData = async function() {
    try {


        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log("users", users)
        console.log("posts", posts)
        console.log("albums", albums)
    } catch {
        console.log("oops")
    }
}