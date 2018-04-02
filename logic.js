$(document).ready(function () {

  $("body").on("click", ".btn", function (event) {
    event.preventDefault();


    var moreCocktails = $(this).text();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    var totalCocktails = "";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {
      console.log(response.drinks[0]);
      console.log(response.drinks[0].strDrink);
      var drinkLists = $('<li>').text(response.drinks[0].strDrink);
      $(".box-3").append(drinkLists);
      console.log(drinkLists);
    })
    var iSearch = function () {
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .done(function (searched) {
          for (var i = 0; i < searched; i++) {
            results++;

            console.log(searched);

          }

        }

        )
    }

  })

})

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 41.85, lng: -87.65 }
  })
}
var authKey = "AIzaSyArQekFCAemjpJYgMnZrNT8blQaat7EvQ4";
var queryURLBase = "https://www.googleapis.com/youtube/v3/search?key=" + authKey+"&channelId=UCaDY8WjYWy36bnt0RVzSklw&part=snippet,id&order=date&maxResults=20";
$.ajax({
  method: "GET",
  url: queryURLBase
}).then(function(data){
  var youTubeResults=data.items[Math.floor(Math.random() * Math.floor(data.items.length))]
  var video = $('<iframe>', {
    src: 'https://www.youtube.com/embed/'+youTubeResults.id.videoId+'?autoplay=1&start=5',
    type: 'video/mp4',
    controls: true
  });
  $("#youtube").append(video);
})


// function runQuery(numVidoes, queryURL) {
//   $.get(queryURLBase, function (data) {
//     fetchData(data);
//   });

//   return false;

// }
