const startAddMovieButton = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop")
const cancelButton = document.querySelector("#add-modal > div.modal__actions > button.btn.btn--passive")
const confirmAddMovieButton = cancelButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll("input")



const toggleBackdropHandler = () => {
    backdrop.classList.toggle("visible")
}

const toggleMovieModalHandler = () => {
    addMovieModal.classList.toggle("visible");
    backdrop.classList.toggle("visivle");
    toggleBackdropHandler()
};
const cancelAddingMovieHandler = () => {
    !toggleMovieModalHandler()

}
const backdropClickHandler = () => {
    toggleMovieModalHandler()
}
const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imageValue = userInput[1].value;
    const ratingValue = userInput[2].value;

    if (titleValue.trim() === "" ||
        imageValue.trim() === "" ||
        ratingValue.trim() === "" ||
        +ratingValue < 1 ||
        +ratingValue > 5) {
        alert("Please enter valid values")
        return;
    }

}


startAddMovieButton.addEventListener("click", toggleMovieModalHandler);
cancelButton.addEventListener("click", cancelAddingMovieHandler);
backdrop.addEventListener("click", backdropClickHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler)