//Using CSS3 Selectros

// find elelement by class
document.getElementsByClassName("img-responsive");
//find elements by selectror
document.querySelector(".img-responsive");

document.querySelectorAll(".img-responsive");

document.querySelectorAll("#example-container li:first-child");

document.querySelectorAll("#example-container li");
//as a result its a node list, to an array

//How to iterate through node list:
//1. standard for loop
//2. for each method

let item = document.querySelectorAll("#example-container li");

for (let i = 0; i < item.length; i++) {
  console.log(item[i].innetText);
}

let forEatch = Array.prototype.forEach;
let itemek = document.querySelectorAll("#example-container li");
forEatch.call(itemek, function(item) {
  console.log(item.innerText);
});
