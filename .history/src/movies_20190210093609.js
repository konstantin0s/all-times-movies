/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// function turnHoursToMinutes(n) {
//   var num = n;
//   var hours = (num * 60);
//   return hours;
// }
//   console.log("haha" + turnHoursToMinutes(movies.duration));

 var HoursAndMinutes = movies.forEach(function(movie) {
 var movieTitle = movie.title;
 var convict = movie.duration.replace(/[^0-9\.]/g, '');


 var newHa = parseInt(convict.slice(0,1));
 var newMin = parseInt(convict.slice(1,3));

    var result = 0;
    var newNum = 0;
   if (newHa >= 1) {
    newHa *= 60;
    newNum += newHa;
 }  result += newNum + newMin;

// console.log(movieTitle + " lasts " + result + " minutes long." );

convict = result;
movie.duration = convict + "min";
// console.log(movie.duration);
// console.log(convict);
// console.log(movieTitle + " lasts " + convict + " minutes long." );

 });

 let in_json = JSON.stringify(movies);
console.log(in_json);




// Get the average of all rates with 2 decimals 
var length = 0;
var total = 0;
for (var rate in movies) {
  total += movies[rate];
  length++;
}
var average =  total / length;
console.log(average);
// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
