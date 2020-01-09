// What is a program? 
// -allocate memory, -parse and execute,

// In every Chrome browser is V8 js engine. active every engine containing memory Heap and Call stack 
// Memory Heak - the memory allocation is happening 
// Call stack - where the code is read and execute it tells you where you are in the program 

// JS is a single-thread language that can be non-blocking? 
// Single-thread - means one statement is executing one a time  


// example of stackOverflow
function foo() {
    foo()
}
foo()

//RangeError: Maximum call stack size exceeded


//example on synchronous programming 
console.log(1);
console.log(2);
console.log(3);

//example on asynchronous programming 
console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000)
console.log(3);

//Javascript Run-Time Environment - it's part of the browser, on the top of the engine its Web API's callback queue and event loop