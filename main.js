var countDownDate = new Date("Oct 21, 2023 16:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function setOverlay() {
  document.getElementById("overlay").style.visibility = "visible";
}

function test() {
  document.getElementById("moreInfo-container").style.height = "66%";
  document.getElementById("close-icon").style.display = "block";
}

function michiganLogoClick() {
  window
    .open("http://www.google.com/search?q=Michigan+Football", "_blank")
    .focus();
}

function michiganStateLogoClick() {
  window
    .open("http://www.google.com/search?q=Michigan+State+Football", "_blank")
    .focus();
}

function closeTest() {
  console.log("test");
  document.getElementById("moreInfo-container").style.height = "3%";
}

function myFunction() {
  var element = document.getElementById("moreInfo-container");
  element.classList.toggle("expand-info-container");
  document
    .getElementById("info-text")
    .classList.toggle("toggle-more-info-text");
  document.getElementById("close-icon").classList.toggle("toggle-close-icon");
  document.getElementById("right-arrow").classList.toggle("toggle-right-arrow");
  document.getElementById("left-arrow").classList.toggle("toggle-left-arrow");
  document
    .getElementById("menu-lodging-container")
    .classList.toggle("toggle-menu-lodging-container");
}
