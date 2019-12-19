let button = document.getElementById("enter");
let input = document.getElementById("userinput");
var ul = document.querySelector("ul")
let deleteAll = document.getElementById("deletaAll")
let allListElements = document.querySelectorAll("ul > li")

function inputLength() {
    return input.value.length
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ""
}
button.addEventListener("click", function() {
    if (inputLength() > 0) {
        createListElement()
    }
})

input.addEventListener("keypress", function(event) {
    if (inputLength() > 0 && event.keyCode == 13) {
        createListElement()
    }
})

deleteAll.addEventListener("click", function() {
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
})