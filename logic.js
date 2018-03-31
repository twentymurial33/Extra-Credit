$( document ).ready(function() {
   var queryURL= "https://www.thecocktaildb.com/api/json/v1/1/random.php";

   $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(queryURL) {
    console.log(queryURL);

})


})
