const __days = document.querySelector("#days");
const __hours = document.querySelector("#hours");
const __minutes = document.querySelector("#minutes");
const __seconds = document.querySelector("#seconds");
const newYearEnd = "Oct 26 2024 17:00:00";

function countdown() {
  const newYearEndDate = new Date(newYearEnd);
  const currentDate = new Date();

  const totalSeconds = (newYearEndDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  __days.innerHTML = formatTime(days);
  __hours.innerHTML = formatTime(hours);
  __minutes.innerHTML = formatTime(minutes);
  __seconds.innerHTML = formatTime(seconds);
}
countdown();

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

document.getElementById("logo").addEventListener("click", function () {
  location.reload();
});

function showPreview() {
  document.getElementById("default-bottom-container").style.display = "flex";
  document.getElementById("schedule-container").style.display = "none";
  document.getElementById("gallery-container").style.display = "none";
}

function showSchedule() {
  document.getElementById("default-bottom-container").style.display = "none";
  document.getElementById("schedule-container").style.display = "block";
  document.getElementById("gallery-container").style.display = "none";
}

function showGallery() {
  document.getElementById("default-bottom-container").style.display = "none";
  document.getElementById("schedule-container").style.display = "none";
  document.getElementById("gallery-container").style.display = "block";
}

// document.addEventListener("DOMContentLoaded", function () {
//   var coll = document.getElementsByClassName("collapsible");
//   for (var i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   }
// });

// function showPreview() {
//   document.getElementById("default-bottom-container").style.display = "flex";
//   document.getElementById("schedule-container").style.display = "none";
//   document.getElementById("gallery-container").style.display = "none";
// }

// function showSchedule() {
//   document.getElementById("default-bottom-container").style.display = "none";
//   document.getElementById("schedule-container").style.display = "block";
//   document.getElementById("gallery-container").style.display = "none";
// }

// function showGallery() {
//   document.getElementById("default-bottom-container").style.display = "none";
//   document.getElementById("schedule-container").style.display = "none";
//   document.getElementById("gallery-container").style.display = "block";
// }
