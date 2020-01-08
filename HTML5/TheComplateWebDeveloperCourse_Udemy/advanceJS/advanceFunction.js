const first = () => {
    const greet = "Hi";
    const second = () => {
        console.log(greet);
    }
    return second
}

const newFunc = first();
newFunc();

//clousers - a function ran. the function executed. its never going to execute again 
// but it's going to remember that there are references to those variables
//so the child scope always has access to the parent scope 

// children always have access to parents scope 
// parents never have access to children scope 

//currying - the process if converting the function that takes multiple arguments 
//into functions that take then one on a time.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// to run the function: 
curriedMultiply(3)(4)

const multiplyBy5 = curriedMultiply(5)
multiplyBy5(11);
// 55

//compose - putting together two functions to compose third functions,
// where the output of the function is the input of the other

const compose = (f, g) => (a) => f(g(a))
const sum = (num) => num + 1;
compose(sum, sum)(5)