// @ts-nocheck
// create an array with all animal
// loop thru array and create buttons with data attr

var animals=["cat", "dog", "horse", "deer", "bird", "mouse", "chinchila", "parrot", "snake", "squirrel", "bat", "monkey"];

for (var i = 0; i < animals.length; i++) {
    var button = $("<button>");
            button.attr({
                "id": animals[i], "data-animal": animals[i],
            }).text(animals[i]); 
      $("#animalBtn").append(button); 
    
}

// create input box 

// check the movies activity

// on click function 
$("button").on("click", function(){

    var animal =$(this).attr("data-animal");
    console.log(this); 
    console.log(animal); 

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=4wZp7oqhGWTqFFP9DT1HW8vR1xVKzmWr"
        ;

        $.ajax({
            url: queryURL,
            method: "GET"
          })    
          .then(function(response) {
            console.log(queryURL);
  
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
  
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
            // Creating and storing a div tag
            var animalDiv = $("<div>");
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);
        
            animalDiv.append(animalImage);
            $("#gifs").prepend(animalDiv);
          }
        });


}); 