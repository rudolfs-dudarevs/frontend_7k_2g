// maina bultiņas virzienu mobilajai izvēlnei un izvērš/savērš mobilo menu - noklikšķinot uz izvērsta menu bultiņas ikonas
 function upBullet() {
  let myIcon = document.getElementById("my-nav-icon");
  let navMobileView = document.getElementById("navbarSupportedContent");
  if (navMobileView.clientHeight > 0) {
    myIcon.classList.remove("down");
  } else {
    myIcon.classList.add("down");
  }
}

 // maina bultiņas virzienu mobilajai izvēlnei - noklikšķinot uz bultiņas
 $(".rotate").click(function () {
  $(this).toggleClass("down");
})

// maina bultiņas virzienu party sadaļā
$(".up-down").click(function () {
  $(this).toggleClass("down");
})