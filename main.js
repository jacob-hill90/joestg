//Links to refresh & google search//
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

function reloadPage() {
  window.location.reload();
}

//Function to handle countdown timer//
var countDownDate = new Date("Oct 21, 2024 16:30:00").getTime();

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
  document.getElementById("demo").innerHTML = `<div id="countdown-wrapper">
  <div id="countdown-column">
    <div>${days}</div>
    <div>&nbspDays</div>
  </div>
  <div id="countdown-column">
    <div>${hours}</div>
    <div>&nbspHrs</div>
  </div>
  <div id="countdown-column">
    <div>${minutes}</div>
    <div>&nbspMin</div>
  </div>
  <div id="countdown-column">
    <div>${seconds}</div>
    <div>&nbspSec</div>
  </div>
</div>`;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Enjoy the Party";
  }
}, 1000);

//EXPAND INFO STUFF//
document.addEventListener("DOMContentLoaded", function () {
  var informationContainer = document.getElementById("information-container");
  var closeInfo = document.getElementById("close-info");
  var infoText = document.getElementById("info-text");
  var menuLodgingContainer = document.getElementById("menu-lodging-container");

  // Add click event listener to the element that expands
  informationContainer.addEventListener("click", function () {
    // Toggle the 'expanded' class
    informationContainer.classList.add("information-container-expanded");
    closeInfo.classList.add("close-info-displayed");
    infoText.classList.add("info-text-hidden");
    menuLodgingContainer.classList.add("menu-lodging-container-displayed");
  });

  // Add click event listener to the close icon
  closeInfo.addEventListener("click", function (e) {
    // Stop the click event from propagating to the parent element
    e.stopPropagation();

    // Remove the 'expanded' class
    informationContainer.classList.remove("information-container-expanded");
    closeInfo.classList.remove("close-info-displayed");
    infoText.classList.remove("info-text-hidden");
    menuLodgingContainer.classList.remove("menu-lodging-container-displayed");
  });
});
