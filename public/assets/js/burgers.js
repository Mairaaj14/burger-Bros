$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var devouredState = {
            devoured: newDevoured
        };

        // Send the put requests
        $.ajax("api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to ", newDevoured);
                // reload page to get updated page
                location.reload();
            }
        );
    })

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerInput").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        // console log new Burger
        console.log(newBurger);
        // send the POST Request
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // send the delete request 
        $.ajax("/api/burger/" + id, {
            type: "DELETE",
        }).then(
            function() {
                console.log("deteled burger", id);
                // reload
                location.reload();
            }
        )
    })
})