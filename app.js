/* function Movie() {
    this.uuid = "";
    this.title = "";
    this.year = "";
    this.genres = "";
    this.related = [];
    this.addRelatedMovie = function (m) {
        if (m instanceof Movie) {
            this.related.push(m);
            return true;
        }
        return false;
    }
    this.setGenre = function (g) {
        if (g instanceof Genre) {
            this.genre = g;
            return this.addRelatedMovie(this);
        }
        return false;
    }
}

function Genre() {
    this.name = "";
    this.movies = [];
    this.addMovie = function (m) {
        if (m instanceof Movie) {
            this.movies.push(m);
            return true;
        }
        return false;
    }
} */

var genres = [];
var movies = [];
function createGenre() {
    var genreName = document.forms["createGenre"]["genreName"].value;
    var genreMovies = document.forms["createGenre"]["genreMovies"].value;

    var newGenre = new Genre();
    newGenre.name = genreName;

    genreMovies = genreMovies.split(", ");
    for (var key in genreMovies) {
        var newMovie = new Movie();
        newMovie.name = genreMovies[key];
        newGenre.addMovie(newMovie);
    }
    genres.push(newGenre);
    console.log(genres);
    count++;
    console.log(count);
    return genres;
}

//Question 3
function displayGenres() {
    //every time the page refreshes, the js gets reloaded as well so variables are not saved
    var ol = document.createElement("ol")
    var li;
    
    for (var key in genres) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(genres[key].name));
        ol.appendChild(li);
    }

    /* document.getElementById("displayGenresBtn").style.display = "none"; */
    document.getElementById("genreList").appendChild(ol);
}

//Question 4
function displayMovies(){
    var table = document.createElement("table")
    
    for (var key in movies) {
        for (var i = 0; i < 3; i++){
            table.appendChild(document.createElement("tr"));
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(movies[key].name));
            table.appendChild(td);
        }
    }

    document.getElementById("displayMoviesBtn").style.display = "none";
    document.getElementById("moviesList").appendChild(ul);
}

//Question 5
function loadGenres(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            
            var genresStrArr = this.responseText.split(",");
            for(var key in genresStrArr){
                var newGenre = new Genre();
                newGenre.name = genresStrArr[key];
                genres.push(newGenre);
            }

            console.log(genres);
            displayGenres();
        }
    };
    xhttp.open("GET", "genreDB.txt", true);
    xhttp.send();
}

function test2(){
    var m = new Movie();
    console.log("Working")
}