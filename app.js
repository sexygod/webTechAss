var genres = [];
var movies = [];

//Question 1
function createGenre(){
    genreMovies = genreMovies.split(", ");
    for (var key in genreMovies) {
        var newMovie = new Movie();
        newMovie.name = genreMovies[key];
        newGenre.addMovie(newMovie);
    }
    genres.push(newGenre);
}

//Question 2
function createMovie(){
    var movieUUID = document.forms["createMovie"]["movieUUID"].value;
    var movieTitle = document.forms["createMovie"]["movieTitle"].value;
    var movieYear = document.forms["createMovie"]["movieYear"].value;
    var movieGenres = document.forms["createMovie"]["movieGenres"].value;
    var relatedMovies = document.forms["createMovie"]["movieRelated"].value;

    var newMovie = new Movie();    
    relatedMovies = relatedMovies.split(",");

    newMovie.setAttributes(movieUUID, movieTitle, movieYear, movieGenres, relatedMovies)
    movies.push(newMovie);
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

            var list = document.getElementById("movieGenres");
            for(var key in genres){
                var option = document.createElement("option");
                option.value = key;
                option.innerHTML = key.name;
                list.appendChild(option);
            }

            console.log(genres); //delete me
            displayGenres();
        }
    };
    xhttp.open("GET", "genreDB.txt", true);
    xhttp.send();
}

//Question 6
function loadMovies(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){

            var moviesJSON = JSON.parse(this.responseText);
            for (var movie in moviesJSON){
                var newMovie = new Movie;
                
            }
        }
    };
    xhttp.open("GET", "moviesDB.json", true);
    xhttp.send();
}

function test2(){
    var m = new Movie();
    console.log("Working")
}