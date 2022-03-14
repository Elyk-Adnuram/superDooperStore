//this function controls the dropdown menu which has an accordion animation style. when clicked on by the mouse the container slidesUp and slidesDown showing the various options.
$(function () {
  $(".accordion").on("click", function () {
    if ($(this).next(".container").is(":visible")) {
      $(this).removeClass("show");
      $(this).next(".container").slideUp();
    } else {
      $(".accordion").find(".container:visible").slideUp();
      $(".accordion").removeClass("show");
      $(this).addClass("show");
      $(this).next(".container").slideDown();
      $("html, body").animate(
        {
          scrollTop: $(this).offset().top,
        },
        200
      );
    }
  });

  // this creates an alert when a user adds an item to the cart
  $(".shop-item-button").on("click", function () {
    alert("You have addded this item to your cart");
  });
  //the function generates the unique reference number
  let x = Math.floor(Math.random() * 100);

  $(".checkout").on("click", function () {
    alert("Thank you for your order. Your Reference number is " + x);
  });
});

$(".cart-footer").on("mouseover", function () {
  // this function makes the elment slide down out over 5 seconds
  $(".cart-footer").slideDown(5000);
  $(".cart-footer").on("mouseover", function () {
    //this function makes the element slide up over 5 seconds
    $(".cart-footer").slideUp(5000);
  });
});
