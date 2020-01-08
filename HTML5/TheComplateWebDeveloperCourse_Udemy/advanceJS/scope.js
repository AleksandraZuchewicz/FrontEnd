function aa() {
    var a = "hello";
    console.log(a)
}
console.log(a) // a is not defined because a is inside local scope of aa()

//root scope 
var fun = 5;

function funFunction() {
    // child scope 
    var fun = "hello";
    console.log(fun)
}

function funerFunction() {
    // child scope 
    var fun = "bye";
    console.log(fun)
}

function funestFunction() {
    // child scope 
    var fun = "A...";
    console.log(fun)
}

console.log(fun)