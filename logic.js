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
      // for(var i=0;i<totalCocktails.length;i++);
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
  });


}

channelId=$("#search").val();
var youTubeUrl = "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyArQekFCAemjpJYgMnZrNT8blQaat7EvQ4&id=" + channelId + "&part=snippet,contentDetails,statistics";

var iWatch = function () {
  $.ajax({
    url: youTubeUrl,
    method: "GET"
  }).get(function(data) {
    console.log(data);


  })


}
