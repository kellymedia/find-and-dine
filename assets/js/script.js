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
  
  if (ingredientsVal === undefined) {
    return;
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
      for (i = 0; i < data.hits.length; i++){
        var cardTitle = $("<h3>").addClass("recipe-title").text(data.hits[i].recipe.label);
        var recipeLink = $("<p>").addClass("recipe-content").text(data.hits[i].recipe.shareAs);
        var cardImg = $("<img>").attr("src", data.hits[i].recipe.image);
        cardImg.addClass("center");
        var card = $("#card");
        card.append(cardTitle);
        card.append(recipeLink);
        card.append(cardImg);
      }

    }
  });

};