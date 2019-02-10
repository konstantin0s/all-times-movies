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
var total = 0;
for(var i = 0; i < movies.length; i++) {
   total += parseInt(movies[i].rate);
}
var avg = total / movies.length;
console.log("Average Of All rates is: " + avg.toFixed(1));


// Get the average of Drama Movies
var dramaMovies =  movies.filter(function(movie) {
  if ((movie.genre == "Drama")) {
   var average = movie.genre.reduce((a, b, i, arr) => a + b.length / arr.length, 0)
      console.log(average);
  }
});


// Order by time duration, in growing order
// var growingOrder = movies.forEach(function(movie) {

// movies.sort(function(a,b){

//   return b.duration>a.duration; 
  
  
//   })
//   console.log(movies.duration);
// });
var growingOrder = movies.forEach(function(movie) {
  // var movieDuration = parseInt(movie.duration);
  // var convict = movie.duration.replace(/[^0-9\.]/g, '');
console.log(movieDuration);
convict.sort((a, b) => (a > b) ? 1 : -1)

});



// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
