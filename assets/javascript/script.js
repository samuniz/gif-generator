// @ts-nocheck
// create an array with all animal
// loop thru array and create buttons with data attr

var tvShowList = ["the office", "friends", "charmed", "big bang theory", "simpsons", "house", "new girl", "game of thrones", "everybody hates chris", "modern family", "sopranos", "sons of anarchy"];
// create the add shoe button 
 



function displayShowInfo(){
    var show = $(this).attr("data-show");
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        show + "&api_key=4wZp7oqhGWTqFFP9DT1HW8vR1xVKzmWr&limit=10"
        ;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            // console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                
                // Creating div tag, image and its attributes 
                var showDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var showImage = $("<img>");
                showImage.addClass("showGif")
                showImage.attr("src", results[i].images.fixed_height_still.url);
                showImage.attr("data-state", "still");
                showImage.attr("data-still", results[i].images.fixed_height_still.url);
                showImage.attr("data-animate", results[i].images.fixed_height.url);
                showDiv.append(p);
                showDiv.append(showImage);
                $("#gifs").prepend(showDiv);

                // 
                // Setting the src attribute of the image to a property pulled off the result it
            }
            // function to animate gifs on click 
            $(".showGif").on("click", function () {
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
    }
// function to create the buttons and attributes
function renderButtons() {
$("#showBtn").empty();


for (var i = 0; i < tvShowList.length; i++) {
    var button = $("<button>");
    button.attr({
        "id": tvShowList[i], "data-show": tvShowList[i], "class": "shows", "type": "button"
    }).text(tvShowList[i]);
    $("#showBtn").append(button);

}
};
// type="button" class="btn btn-info">

$("#addShowBtn").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var newShow = $("#userShow").val().trim();

    // The movie from the textbox is then added to our array
    tvShowList.push(newShow);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  $(document).on("click", ".shows", displayShowInfo);
  
  renderButtons(); 


// on click function 
// $("button").on("click", function () {

// });

