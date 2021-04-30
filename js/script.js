"use strict";

function setNewImg() {
  document.getElementById("img-erika").src =
    "css/img_css/img-ErikaHashizume-color.jpg";
}
function setOldImg() {
  document.getElementById("img-erika").src =
    "css/img_css/img-ErikaHashizume.JPG";
}

$(function () {
  $(".animation-delay").css({ opacity: "0" });
  setTimeout(function () {
    $(".animation-delay").stop().animate({ opacity: "1" }, 1000);
  }, 500);
});

// // swup
// const swup = new Swup();

// //When you reach waypoint 3
// $(".js--wp-1").waypoint(
//   (direction) => {
//     // add the class animated__animated and animate__fadeIn to waypoint 3
//     $(".js--wp-1).addClass("animate__animated animate__fadeIn");
//   },
//   {
//     offset: "50%",
//   }
// );
//     //When you reach THE HEADER
//     $('.js--header').waypoint(
//       (direction) => {
//         if (direction === 'up') {
//   // remove the animation classes from all waypoints (1 - 4)
//           $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
//           $('.js--wp-2').removeClass('animate__animated animate__fadeInLeft');
//           $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
//           $('.js--wp-4').removeClass('animate__animated animate__bounceIn');
//         }
//       },
//       {
//         offset: '-25%',
//       }
//     );
