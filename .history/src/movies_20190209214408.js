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

var HoursAndMinutes = movies.map(function(movie) {
 var conv = parseInt(movie.duration.replace(/[^0-9\.]/g, ''));

 var output = [],
 sNumber = conv.toString();


for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
console.log(sum);


console.log("minutes: " + conv);

 if (conv >= 2) {
   conv *= 60;
 } else {
   conv += 59;
 }

 return conv;
// var newH = conv.slice(0,1);
// var newMin = conv.slice(3,3);
  // console.log(conv);
  // console.log(newH);
  // console.log(newMin);
})

console.log(HoursAndMinutes);




// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
