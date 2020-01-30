const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");

    if (movies.length === 0) {
        movieList.classList.remove("visible");
        return;
    } else {
        movieList.classList.add("visible")
    }
    movieList.innerHTML = "";

    const filterMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))
    filterMovies.forEach((movie) => {
        const movieEl = document.createElement("li");
        movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
    })
}


const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;
    if (title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "") {
        return;
    };


    const newMovie = {
        info: {
            title,
            extraName: extraValue,
        },
        id: Math.random()
    };

    movies.push(newMovie);
    renderMovies()
}

const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm)
}
addMovieButton.addEventListener("click", addMovieHandler)
searchButton.addEventListener("click", searchMovieHandler)