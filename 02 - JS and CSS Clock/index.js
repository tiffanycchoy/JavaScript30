const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function getSeconds(time) {
  var seconds = time.getSeconds();
  var secondsDegrees = (360 / 60 * seconds) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function getMinutes(time) {
  var minutes = time.getMinutes();
  var minutesDegrees = ((360 / 60 * minutes)) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function getHour(time) {
  var hours = time.getHours();
  var hoursDegrees = ((360 / 12 * hours)) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(function() {
  var time = new Date();
  getSeconds(time);
  getMinutes(time);
  getHour(time);
}, 1000);
