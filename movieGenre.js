//Question 1, 2, 3, 4
function Movie(){
    this.uuid = "";
    this.title = "";
    this.year = "";
    this.genres = "";
    this.related = [];
    this.addRelatedMovie = function(m){
        if (m instanceof Movie){  
            this.related.push(m);
            return true;
        }
        return false;
    }
    this.setGenre = function(g){
        if (g instanceof Genre){
            this.genre = g;
            g.addMovie(this);
            return True;
        }
        return false;
    }
}

function Genre(){
    this.name = "";
    this.movies = [];
    this.addMovie = function(m){
        if(m instanceof Movie){
            this.movies.push(m);
            return true;
        }
        return false;
    }
}

function test(){
    var mv = new Movie();
    var mv2 = new Movie();
    var g = new Genre();
    return(g.addMovie(mv));
}

console.log(test());