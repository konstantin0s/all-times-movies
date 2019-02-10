/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
  var hour = parseInt(array/3600);
  var min = parseInt(((array/3600)-hour)*60);
  return hour + ":" + min; 
}

var HoursAndMinutes = movies.map(function(movie) {
  console.log(movie.duration);
  return movie.duration;
})

turnHoursToMinutes(HoursAndMinutes);


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
