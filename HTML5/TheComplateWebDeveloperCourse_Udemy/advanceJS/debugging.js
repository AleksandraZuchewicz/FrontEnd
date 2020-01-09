//Debugging is the act of looking over the code, understanding whats its doing  and figuring out what its not acting as expected 

const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce((accumulator, array) => {
    debugger;
    // console.log("array", array);
    // console.log("accumulator", accumulator);
    return accumulator.concat(array)
}, [])