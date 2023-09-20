var main = document.querySelector("main");
var saveBtn = $(".saveBtn");
var currentDay = dayjs().format("MMM D, YYYY, hh:mm:ss a");

var timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentTime = dayjs().format("HH");

var allSchedules = [];

function displayTime() {
  $("#currentDay").text(currentDay);
};

function displayBg() {

  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];

    if (timeBlock == currentTime) {
      $("#hour-" + timeBlock).addClass("present");
    } else if (timeBlock > currentTime) {
      $("#hour-" + timeBlock).addClass("future");
    } else if (timeBlock < currentTime) {
      $("#hour-" + timeBlock).addClass("past");
    }
  };
};

function renderSchedule() {
  document.getElementById("nine").textContent = localStorage.getItem("nine");
  document.getElementById("ten").textContent = localStorage.getItem("ten");
  document.getElementById("eleven").textContent = localStorage.getItem("eleven");
  document.getElementById("twelve").textContent = localStorage.getItem("twelve");
  document.getElementById("thirteen").textContent = localStorage.getItem("thirteen");
  document.getElementById("fourteen").textContent = localStorage.getItem("fourteen");
  document.getElementById("fifteen").textContent = localStorage.getItem("fifteen");
  document.getElementById("sixteen").textContent = localStorage.getItem("sixteen");
  document.getElementById("seventeen").textContent = localStorage.getItem("seventeen");
};

function saveAll(ID, contents) {
  localStorage.setItem(ID, contents);
};

function init() {
  setInterval(displayTime, 1000);
  displayBg();
  renderSchedule();
};

main.addEventListener("click" , function(event) {
  var saveButton = event.target;
  var selectedID = saveButton.previousElementSibling.id;
  var selectedValue = saveButton.previousElementSibling.value;

  saveAll(selectedID, selectedValue);
});

init();