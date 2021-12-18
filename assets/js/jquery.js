// document.addEventListener("DOMContentLoaded", function () {
//   let paragraphs = document.querySelectorAll("p");
//   if (paragraphs) {
//     paragraphs.forEach((p) => {
//       p.addEventListener("click", function () {
//         this.remove();
//       });
//     });
//   }
// });

$(document).ready(function () {
  //   $("div[class*=ox]").click(function () {
  //     $(".last").show();
  //   });
  //   $(".box .title").click(function () {
  //     console.log("okay");
  //   });
  $(".click").click(function () {
    //   $("p").fadeTo(2000, 0.15);
    //   $(".box").slideToggle(5000);
    //   $(".box").css("display", "flex");
    // $(".box").animate({
    //   left: "250px",
    //   width: "100px",
    //   opacity: "0.3",
    // });

    let style = {
      color: "red",
      width: "150px",
      backgroundColor: "blue",
      transition: "1s",
      height: "150px",
    };

    $(".newBox").css(style);
  });
  // $(".stop").click(function () {
  //   $(".box").stop();
  // });
});
