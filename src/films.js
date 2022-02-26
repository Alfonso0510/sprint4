// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(film => {
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

  //Calculamos la suma total de las notas
  let totalAverages = filmDirector.reduce((total, film) => total + film.score, 0);

  //Buscar la mitja
  let result = Math.round((totalAverages / filmDirector.length) * 100) / 100;

  console.log("EXERCICE 3 ->", result);
  return result;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  //Creamos un nuevo array 
  let titles = array.map((title) => title.title);
  //Evaluamos los titulos del array y los ordenamos con sort, mirando si a > b o viceversa
  //Dependiendo del resultado, si es 1 o -1. Finalmente con slice hacemos que solo se devuelvan
  //20 resultados
  let result = titles.sort((a, b) => (a > b ? 1 : -1)).slice(0, 20);

  console.log('EXERCICE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  //Creamos un nuevo array
  let result =  array.map( film => film );
  //Ordenamos el array por años, y si coinciden tomamos como referencia el titulo
  result.sort((a, b) =>  a.year - b.year ||  a.title.localeCompare(b.title));
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  //Creamos un nuevo array
  let scoreList = []
  //Filtramos el array con los elementos que coinciden con el genero
  let genreFiltered = array.filter(film => film.genre == genre);
  //Actualizamos el array 
  genreFiltered.map( film => { if(film["score"] !== '') { scoreList.push(film["score"]) } });
  //Usamos reduce para sumar los valores y luego lo dividimos por su longitud
  let result = scoreList.reduce( (pre, curr) => pre + curr ) / scoreList.length;
  console.log("EXERCICE 6 ->", result);
  return result;
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
