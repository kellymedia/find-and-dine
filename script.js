/* Perhaps make input field part of a form instead of a stand-alone input field. 
   This way I can make an event listener for an enter key (...on("submit")) to
   create lighter js
*/



$(document).ready(function() {
  $("#ingredients").on("keypress", function(event) {
    if (event.key === "Enter") {
      var ingredientsVal = $("#ingredients").val();
      console.log(ingredientsVal);
      buildQueryURL(ingredientsVal)
      
    }
  })
})

function buildQueryURL(ingredientsVal){
  var apiKey = "071433ed368b8ff707435d1d532f5a4e"
  var appID = "f11a75b9"
  var queryURL = "https://api.edamam.com/search?q=" + ingredientsVal + "&app_id=" + appID + "&app_key=" + apiKey;

  console.log("buildQueryURL function is executing");
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data);
      var cardTitle = $("<h3>").addClass("recipe-title").text(data.hits[0].recipe.label);
      var recipeLink = $("<p>").addClass("recipe-content").text(data.hits[0].recipe.shareAs);
      var card = $("#card");
      card.append(cardTitle);
      card.append(recipeLink);

    }
  });

};

buildQueryURL();

