// @ts-nocheck
// create an array with all animal
// loop thru array and create buttons with data attr

var animalList = ["cat", "dog", "horse", "deer", "bird", "mouse", "chinchila", "parrot", "snake", "squirrel", "bat", "monkey"];

for (var i = 0; i < animalList.length; i++) {
    var button = $("<button>");
    button.attr({
        "id": animalList[i], "data-animal": animalList[i]
    }).text(animalList[i]);
    $("#animalBtn").append(button);

}

// create input box 

// check the movies activity

// on click function 
$("button").on("click", function () {

    var animal = $(this).attr("data-animal");
    console.log(this);
    console.log(animal);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=4wZp7oqhGWTqFFP9DT1HW8vR1xVKzmWr&limit=10"
        ;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                // Creating and storing a div tag

                var animalDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var animalImage = $("<img>");
                animalImage.addClass("animalGif")
                animalImage.attr("src", results[i].images.fixed_height_still.url);
                animalImage.attr("data-state", "still");
                animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                animalImage.attr("data-animate", results[i].images.fixed_height.url);
                animalDiv.append(p);
                animalDiv.append(animalImage);
                $("#gifs").prepend(animalDiv);

                // 
                // Setting the src attribute of the image to a property pulled off the result it
            }
            $(".animalGif").on("click", function () {
                console.log("Clicked!")
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        });

});



