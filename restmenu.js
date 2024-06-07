// ..........//////////////////--------------------restaurant whislist ---------------------

$(".i1").click(function () {
    $(this).css({ display: "none" });
    $(this).next(".i2").css({ display: "block" });
  });
  
  $(".i2").click(function () {
    $(this).css({ display: "none" });
    $(this).prev(".i1").css({ display: "block" });
  });
// .........-------restaurant whislist end-------------food item whislist    start------------
  $(".f1").click(function () {
    $(this).css({ display: "none" });
    $(this).next(".f2").css({ display: "block" });
  });
  
  $(".f2").click(function () {
    $(this).css({ display: "none" });
    $(this).prev(".f1").css({ display: "block" });
  });
// -------------------------------------add to cart ----start------

$(".b1").click(function () {
  $(this).css({ display: "none" });
  $(this).next(".b2").css({ display: "block" });
});
$(".b2").click(function () {
  $(this).css({ display: "none" });
  $(this).prev(".b1").css({ display: "block" });
});

// -----------------------------------filter manu bar -----------
$(".filter-button").click(function () {
  $(".filter-bar").css({ display: "block" });
  $(".filter-blur").css({ display: "block" });
  $("#body").css({ overflow: "hidden" });
});
$(".f-close").click(function () {
  $(".filter-bar").css({ display: "none" });
  $(".filter-blur").css({ display: "none" });
  $("#body").css({ overflow: "auto" });
});

// document.addEventListener("DOMContentLoaded", function() {
//   // Handle click on filter button
//   document.querySelector(".filter-button").addEventListener("click", function() {
//       document.querySelector(".filter-bar").style.display = "block";
//       document.querySelector(".filter-blur").style.display = "block";
//       document.querySelector("#body").style.overflow = "hidden";
//   });

//   // Handle click on close button
//   document.querySelector(".f-close").addEventListener("click", function() {
//       document.querySelector(".filter-bar").style.display = "none";
//       document.querySelector(".filter-blur").style.display = "none";
//       document.querySelector("#body").style.overflow = "auto";
//   });
// });

// .......------------food item whislist end--------------menubar for nav start-------

  $("#menu").click(function () {
    $("#menubar").css({ display: "block" });
    $("#close_menu").css({ display: "block" });
    $("#body").css({ overflow: "hidden" });
  });

  function menu() {
    var x = document.getElementById("menubar");
    var y = document.getElementById("close_menu");
    var b = document.getElementById("body");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      b.style.overflow = "auto";
    }
  }

// .......-----------------menubar for nav end-------
