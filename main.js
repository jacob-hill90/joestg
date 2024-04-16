const __days = document.querySelector("#days");
const __hours = document.querySelector("#hours");
const __minutes = document.querySelector("#minutes");
const __seconds = document.querySelector("#seconds");
const newYearEnd = "Oct 24 2024 00:00:00";

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

function showSchedule() {
  document.getElementById("default-bottom-container").style.display = "none";
  document.getElementById("gallery-container").style.display = "none";
  document.getElementById("schedule-container").style.display = "block";
}

function showGallery() {
  document.getElementById("default-bottom-container").style.display = "none";
  document.getElementById("schedule-container").style.display = "none";
  document.getElementById("gallery-container").style.display = "block";
}

function showPreview() {
  document.getElementById("default-bottom-container").style.display = "flex";
  document.getElementById("schedule-container").style.display = "none";
  document.getElementById("gallery-container").style.display = "none";
}
