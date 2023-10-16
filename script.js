////// HÄNGA GUBBE //////

//ord till spelet
const words = [
  "banana",
  "computer",
  "elephant",
  "guitar",
  "jazz",
  "kangaroo",
  "mountain",
  "ocean",
  "piano",
  "telescope",
  "apple",
  "strawberry",
  "orange",
  "butterfly",
  "fireplace",
  "zeppelin",
  "waterfall",
  "sunflower",
  "chocolate",
  "bicycle",
  "dragon",
  "umbrella",
  "octopus",
  "volcano",
  "parachute",
  "rainbow",
  "penguin",
  "hamburger",
  "caterpillar",
];
let selectedWord =
  words[Math.floor(Math.random() * words.length)].toLowerCase();
let guessedWord = new Array(selectedWord.length).fill("_");
let remainingAttempts = 6; // Antal försök

const wordDisplay = document.querySelector(".word-display");
const attemptsDisplay = document.querySelector(".attempts-display");
const buttons = document.querySelectorAll(".buttons button");

//array för svg
const hmanSvg = ["ground", "head", "scaffold", "legs", "arms", "body"];
hmanSvg.reverse();

// Uppdatera visningen av ordet med gissade bokstäver
function updateWordDisplay() {
  wordDisplay.textContent = guessedWord.join(" ");
}

// Uppdatera antalet försök som återstår
function updateAttemptsDisplay() {
  attemptsDisplay.textContent = `Försök kvar: ${remainingAttempts}`;
}

// Kolla om bokstaven är i det valda ordet
function isLetterInWord(letter) {
  return selectedWord.includes(letter);
}

// Uppdatera det gissade ordet med bokstaven
function updateGuessedWord(letter) {
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === letter) {
      guessedWord[i] = letter;
    }
  }
  updateWordDisplay();
}

// Kolla om spelaren har vunnit
function checkWin() {
  if (!guessedWord.includes("_")) {
    window.location.href = "win.html";
  }
}

// Kolla om spelaren har förlorat
function checkLose() {
  if (remainingAttempts === 0) {
    window.location.href = "loose.html";
  }
}

// Hantera en gissning
function handleGuess(letter) {
  letter = letter.toLowerCase();
  const buttonElement = document.getElementById(`${letter}`);

  if (isLetterInWord(letter)) {
    updateGuessedWord(letter);
    buttonElement.disabled = true;
    buttonElement.style.backgroundColor = "green"; // Ändra knappens färg till grön
  } else {
    remainingAttempts--;
    hangManDisplay();
    updateAttemptsDisplay();
    buttonElement.disabled = true;
    buttonElement.style.backgroundColor = "red"; // Ändra knappens färg till röd
  }
}

// Återställ spelet
function resetGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
  guessedWord = new Array(selectedWord.length).fill("_");
  remainingAttempts = 6;
  wordDisplay.textContent = "";
  attemptsDisplay.textContent = "";
  buttons.forEach((button) => {
    button.disabled = false;
    button.style.backgroundColor = "ligthgrey";
  });
  startGame();
}

// Starta spelet
function startGame() {
  updateWordDisplay();
  updateAttemptsDisplay();
}

//skriver ut svg filen
function hangManDisplay() {
  const id = hmanSvg[remainingAttempts];
  const element = document.getElementById(id);
  element.style.display = "block";
}

// Lyssna på klickhändelser på knapparna
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const letter = buttons[i].innerText;
    handleGuess(letter);
    checkLose();
    checkWin();
  });
}

// Starta spelet när sidan laddas
startGame();

// Fuskkod
console.log(selectedWord);

// Hint bokstav
hintButton = document.getElementById("hintBtn");
hintDisplay = document.getElementById("hint-display");

function showHint() {
  hintDisplay.textContent = `hint: ${selectedWord}`;
}

hintButton.addEventListener("click", showHint);
