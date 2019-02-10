/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

var myJSON = JSON.stringify(movies);
console.log(myJSON);
// function turnHoursToMinutes(array) {

//   duration : function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

var HoursAndMinutes = movies.map(function(movie) {

 var conv = parseInt(movie.duration);
  console.log(conv);
})

// console.log(turnHoursToMinutes(HoursAndMinutes));


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
