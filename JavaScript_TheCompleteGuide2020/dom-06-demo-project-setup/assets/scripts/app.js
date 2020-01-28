const startAddMovieButton = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop")
const cancelButton = document.querySelector("#add-modal > div.modal__actions > button.btn.btn--passive")
const confirmAddMovieButton = cancelButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text")

const movies = [];
const clearMovieHandler = () => {
    for (const usrInput of userInput) {
        usrInput.value = ""
    }
}
const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block"
    } else {
        entryTextSection.style.display = "none"
    }
}
const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove()
};

const renederNewMovieElement = (id, title, imageValue, rating) => {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageValue}"  alt="${title}">
    </div>
    <div class="movie-element__image">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `;

    newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement)
}

const toggleBackdropHandler = () => {
    backdrop.classList.toggle("visible")
}

const toggleMovieModalHandler = () => {
    addMovieModal.classList.toggle("visible");
    backdrop.classList.toggle("visivle");
    toggleBackdropHandler()
};
const cancelAddingMovieHandler = () => {
    !toggleMovieModalHandler();
    clearMovieHandler()

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
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies)
    toggleMovieModalHandler()
    clearMovieHandler()
    renederNewMovieElement(newMovie.id,
        newMovie.title,
        newMovie.image,
        newMovie.rating)
    updateUI()
}



startAddMovieButton.addEventListener("click", toggleMovieModalHandler);
cancelButton.addEventListener("click", cancelAddingMovieHandler);
backdrop.addEventListener("click", backdropClickHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler)