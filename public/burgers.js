$(function() {
$(".eat").on("click", function(){
    console.log("eaten");
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
            console.log("burger eaten");
          
          location.reload();
        }
      );


});

$(".burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#new-burger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });







});