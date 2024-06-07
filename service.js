$(document).ready(function() {
    $(".more").click(function () {
        $(this).css({ display: "none" });
        $(this).siblings(".less").css({ display: "block" });
        $(this).siblings(".join-p2").css({ display: "block" });
        $(this).siblings(".in-but").css({ display: "inline" });
        $(this).siblings("p").find(".join-dot").css({ opacity: "0" });
      });
      
      $(".less").click(function () {
        $(this).css({ display: "none" });
        $(this).siblings(".more").css({ display: "block" });
        $(this).siblings(".join-p2").css({ display: "none" });
        $(this).siblings(".in-but").css({ display: "none" });
        $(this).siblings("p").find(".join-dot").css({ opacity: "1" });

      });
});
