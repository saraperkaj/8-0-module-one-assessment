/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //creat a var, assign it an empty array
  let films = [];
  //create for of loop throguh movies
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    //if the movie.title
    if (movie) {
      //then push the title into array
      films.push(movie.title);
    }
  }
  //return the var
  return films;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //declare a var and assign it 0
  let currentScore = 0;
  //for of loop through movies
  for (const movie of movies) {
    //if the metascore is greater than the var
    if (Number(movie.metascore) > currentScore) {
      //then the var is that metascore
      currentScore = Number(movie.metascore);
    }
  }
  //outside the loop return var
  return currentScore;

  // //declare a var(current metascore), assign it 0
  // let currentScore = 0;
  // //for of loop through movies
  // for (const movie of movies) {
  //   //the score
  //   let score = movies[0];
  //   //if movie.metascore is greater than the current
  //   if (movie.metascore > score.metascore) {
  //     //then the var is now that metascore
  //     currentScore = movie.metascore;
  //   }
  // }
  // //return the var
  // return Number(currentScore);
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  //declare a var and assign it 0
  let average = 0;
  //if the movie isnt there
  if (movies.length === 0) {
    //just return 0
    return 0;
  }
  //for of loop through movies
  for (const movie of movies) {
    //if the movie has an imbd id (movie.imbdID)
    if (movie.imdbID) {
      //then we add up all the imbdRating
      average += Number(movie.imdbRating);
    }
  }
  //return the var
  //and divide by the length of movies and we set it equal to the var
  return average / movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //declare a var and assign it an empty obj
  let obj = {};
  // if there are no movies
  if (movies.length === 0) {
    //return the var
    return obj;
  }
  //for of loop through movies
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i].rated;
    //if the var with the movie in it
    if (obj[movie]) {
      //then its that += 1
      obj[movie] += 1;
    } else {
      obj[movie] = 1;
    }
  }
  //return the var
  return obj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  //if the movie isnt there
  if (movies.length === 0) {
    //return null
    return null;
  }
  //for of loop through movies
  for (const movie of movies) {
    //if the movie starting at the first index [0] with the imdb ID is equal to the given id
    if (movie.imdbID === id) {
      //then return the movie and all its info
      return movie;
    }
  }
  return null;

  // //create a var, assign it an empty object
  // let obj = {};
  // //if movies isnt there
  // if (movies.length === 0) {
  //   //return null
  //   return null;
  // }
  // //for loop through movies
  // for (const movie of movies) {
  //   // //if the imdbID matches id
  //   // if (movie.imdbID === id) {
  //   //   //then return the movie in the object
  //   //   obj = movie;
  //   // }
  //   movie.imdbID === id ? (obj = movie) : null;
  // }
  // //return the object
  // return obj;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, givenGenre) {
  //declare a var assign it an empty array
  let array = [];
  //for of loop through movies
  for (const movie of movies) {
    //if the movie genre .includes the given genre
    if (movie.genre.toLowerCase().includes(givenGenre.toLowerCase())) {
      //then push the movies in the array
      array.push(movie);
    }
  }
  //return the array
  return array;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  //declare a var, assign it an empty arr
  let arr = [];

  //for of loop through the movies
  for (const movie of movies) {
    //if the movie is released less than or equal to =< the given year
    if (movie.released.split(" ")[2] <= year) {
      //then push the movie into the arr
      arr.push(movie);
    }
  }
  //return the var
  return arr;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  //if there arent any movies
  //retirn null
  //
  // //if there arent any movies
  // if (movies.length === 0) {
  //   //return null
  //   return null;
  // }
  // //make a var and set it to 0 (current Box Office Amount)
  // let currentBOA = 0;
  // //the movie with the biggest box office amount
  // let biggetsBOA;
  // //for of loop through movies
  // for (const movie of movies) {
  //   //make the box office amount a number without commas and $
  //   movie.boxOffice.replaceAll(",", "");
  //   movie.boxOffice.replaceAll("$", "");
  //   //let the box office amount be a number
  //   let BOA = Number(movie.boxOffice);
  //   //if the box office amount is more than the var
  //   if (BOA > currentBOA) {
  //     //then the var is that box office amount
  //     currentBOA = BOA;
  //   }
  //   //if the var
  //   if (currentBOA) {
  //     //then return THAT movie attached to the var
  //     biggetsBOA = movie.title;
  //   }
  // }
  // //return the movie with the biggest boa
  // return biggetsBOA;

  //declare a var named current and set it to 0
  let current = movies[0];
  //if there are no movies
  if (movies.length === 0) {
    //return null
    return null;
  }
  //for of loop through movies
  for (const movie of movies) {
    //make the box office a number with no commas and no dollar sign
    movie.boxOffice.replaceAll(",", "");
    movie.boxOffice.replaceAll("$", "");
    Number(movie.boxOffice);
    //if the box office amount is more than the current
    if (movie.boxOffice > current.boxOffice) {
      //then the current is now the box office amount bc its the highest
      current = movie.boxOffice;
    }
    //outside of the loop if its the current
    if (current) {
      //then return the name of the movie
      return current.title;
    }
  }
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
