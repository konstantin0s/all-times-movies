/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// function turnHoursToMinutes(n) {
//   var num = n;
//   var hours = (num * 60);
//   return hours;
// }
//   console.log("haha" + turnHoursToMinutes(movies.duration));

// var myJSON = JSON.stringify(movies.duration);
// console.log(myJSON);

// function turnHoursToMinutes(array) {

//   duration : function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

var HoursAndMinutes = movies.forEach(function(movie) {
 var convict = movie.duration.replace(/[^0-9\.]/g, '');

// console.log("minutes: " + convict);
// console.log(doSplit);

var newHa = parseInt(convict.slice(0,1));

  // console.log(conv);
  console.log(newHa);

  var newMin = parseInt(convict.slice(1,3));
  console.log(newMin);

    var result = 0;
    var newNum = 0;
 if (newHa >= 1) {
  newHa *= 60;
  newNum += newHa;
 }
result += newNum + newMin;

var moviess = movies.forEach(function(movie) {
  var gimmeName =  movie.title;
  return gimmeName;
 
 });

 console.log(moviess)
 

  $('#minut').text(movie.title + " lasts " + result + " minutes long.");
//  console.log("minutes " + result);

})

// var result = ""
// var result = "";

var getMovieName = movies.forEach(function(movie) {
 var gimmeName =  movie.title;
 return gimmeName;
//  $('#minut').text(gimmeName + " lasts " + result + " minutes long.");

});



// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
