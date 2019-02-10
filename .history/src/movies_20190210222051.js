/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// var newMoviesArray = movies.map((movie) => 
// ({ title: movie.title, year: movie.year, director: movie.director,
//    duration: parseInt(movie.duration.split(" ")[0]) * 60 + 
//    parseInt(movie.duration.split(" ")[1]), genre: movie.genre, rate: movie.rate}));

 var HoursAndMinutes = movies.forEach(function(movie) {

 var convict = movie.duration.replace(/[^0-9\.]/g, '');


 var newHa = parseInt(convict.slice(0,1));
 var newMin = parseInt(convict.slice(1,3));

    var result = 0;
    var newNum = 0;
   if (newHa >= 1) {
    newHa *= 60;
    newNum += newHa;
 }  result += newNum + newMin;

convict = result;
movie.duration = convict + "min";
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
// var dramaStore = 0;
      //  for (var i = 0; i < movies.length; i++) {
      //   var result = movies.filter(obj => {
      //     return obj.genre == "Drama";
      //   });}
        

        console.log(result);
     
        function averageDrama(movie) {
          var sum = 0,
              count = 0,
              i;
      
          for (i = 0; i < movie.length; i++) {
              if (movie[i].genre == 'Drama') {
                  sum += parseInt(movie[i].rate);
                  ++count;
              }
          }
             var avgDrama =  sum / count;
             return avgDrama.toFixed(1);
       
      }

      console.log(averageDrama(movies) + " is the average rate");

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
// for (var i = 0; i < movies.length; i++) {
  var result = movies.filter(obj => {
    return obj.director == "Steven Spielberg";
  })
  console.log( "Steven Spielberg did " + result.length + " movies");
  console.log(result);
  // ;}

// Order by title and print the first 20 titles
let newMovie = movies;

  function compare_to_sort(x,y) 
  {
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
  }
   var sortTitle = newMovie.sort(compare_to_sort);
   var firstTwenty = 20;
  for (var i = 0; i < firstTwenty; i++) {
  var lengthty = sortTitle[i].length;
               console.log(sortTitle[i]);
}

// Best yearly rate average
// function sayAgeForAll() {
//   console.log(this.age);
// }

// newMovieObject = movies;
// newMovieObject = 