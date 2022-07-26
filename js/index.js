let homeGameScore = document.getElementById("home-score");
let guestGameScore = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function homeAdd1() {
  homeScore += 1;
  homeGameScore.textContent = homeScore;
}

function homeAdd2() {
  homeScore += 2;
  homeGameScore.textContent = homeScore;
}

function homeAdd3() {
  homeScore += 3;
  homeGameScore.textContent = homeScore;
}

function guestAdd1() {
  guestScore += 1;
  guestGameScore.textContent = guestScore;
}

function guestAdd2() {
  guestScore += 2;
  guestGameScore.textContent = guestScore;
}

function guestAdd3() {
  guestScore += 3;
  guestGameScore.textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeGameScore.textContent = 0;
  guestGameScore.textContent = 0;
}
