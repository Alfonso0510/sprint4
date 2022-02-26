// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(film => {
    return film.director;
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(film => film.director == director);
  console.log("EXERCICE 2 ->", result);
  return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  //Buscamos las peliculas del director
  let filmDirector = array.filter(film => film.director == director);

  //Determinamos la longitud
  //let qDirector = peliculasDirector.length;

  //Calculamos la suma total de las notas
  let totalAverages = filmDirector.reduce((total, film) => total + film.score, 0);

  //Buscar la mitja
  let result = Math.round((totalAverages / filmDirector.length) * 100) / 100;

  console.log("EXERCICE 3 ->", result);
  return result;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
