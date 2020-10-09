let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    console.log("Printing all movies...");
    var totalMovies = allMovies.length;
    for (movies of allMovies) {
        console.log(movies.title + ", rating of " + movies.rating + ", havewatched: " + movies.haveWatched);
    }
    console.log("You have " + totalMovies + " movies in total");
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    console.log("printing movie that has a rating higher than " + rating);
    var matches = 0
    for (movies of allMovies) {
        if (movies.rating > rating) {
            console.log(movies.title + " has a rating of " + movies.rating);
            matches += 1;
        }
    }
    console.log("In total, there are " + matches + " matches");
}

//Toggle the 'haveWatched' property of the specified movie
function changeWatched (title) {
    console.log("changing the status of the movie...");
    for (movies of allMovies) {
        if (movies.title == title) {
            movies.haveWatched = true;
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);
