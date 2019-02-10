/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function timeConvert(n) {
  var num = n;
  var hours = (num * 60);
  var rhours = Math.floor(hours);
  return num + rhours;
}
  console.log(timeConvert(2));

var myJSON = JSON.stringify(movies.duration);
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

function turnHoursToMinutes(array) {
  var hour = parseInt(array/3600);
  var min = parseInt(((array/3600)-hour)*60);
  return hour + ":" + min; 
}

var HoursAndMinutes = movies.map(function(movie) {

  return movie.parseInt(duration);
})

// console.log(turnHoursToMinutes(HoursAndMinutes));


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
