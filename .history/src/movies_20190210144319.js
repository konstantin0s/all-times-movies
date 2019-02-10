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
var dramaStore = 0;
       for (var i = 0; i < movies.length; i++) {
    // console.log(movies[i].genre == "Drama");
            // console.log(totalDrama);
            if (movies[i].genre == "Drama") {
              dramaStore += movies[i].rate;
              var avege = parseInt(dramaStore) / movies[i].genre.length;
              // dramaStore += movies[i].rate;
              console.log(avege);

          
       }
          }
      

// console.log(newMovie);
  // let avgDrama = [];
  // if ((movie.genre == "Drama")) {
  //       avgDrama.push(movies.rate)
  //       console.log(avgDrama)
  //       console.log(movies.rate);
          // var totalDrama = 0;
          // for (var i = 0; i <= movies.length; i++) {
          //   totalDrama += parseInt(movies[i].rate);
          //   console.log(totalDrama);
          // }
    // console.log(movie.genre);
    // console.log(movie.rate);
  //  var average = parseInt(movie.rate).reduce((a, b, i, arr) => a + b.length / arr.length, 0)
  //     console.log(average);
  // }



// Order by time duration, in growing order

  let newMovieObj = movies;
  newMovieObj.forEach(function(movie) {
  movie.duration = movie.duration.replace(/[^0-9\.]/g, '');

  function compare(a,b) {
    return a.duration - b.duration;
   }
   newMovieObj.sort(compare);
});
console.log(newMovieObj);


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
