const button = document.querySelector('button');

// 1st 

button.onclick = function() {

}

//2nd - one handler one time with event;when you add it will overwrote  event

const buttonHandler = () => {
    alert('Button was cliked')
}
button.onclick = buttonHandler;

//3rd 

button.addEventListener('click', buttonHandler);
setTimeout(() => {
    button.removeEventListener('click', buttonHandler)
}, 2000)