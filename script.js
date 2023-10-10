const buttons = document.getElementsByTagName("button");

//add eventlistener to each button
for (let index = 0; index < buttons.length; index++) {
  buttons.item(index).addEventListener("click", function onClick() {
    const letter = this.innerText;
    const match = checkLetter(letter);

    if (match === true) {
      this.style.backgroundColor = "green";
    } else {
      this.style.backgroundColor = "red";
    }
  });
}

// Skriv ut flera ord i en array

const randomWords = [
  "apple",
  "banana",
  "carrot",
  "dog",
  "elephant",
  "flower",
  "grape",
  "house",
  "iguana",
  "jacket",
];

// Ta fram ett random ord ur arrayen

const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// Kolla om bokstaven är en del av randomWord

function checkLetter(letter) {
  const lowerCaseWord = randomWord.toLowerCase();
  const lowerLetter = letter.toLowerCase();

  if (lowerCaseWord.includes(lowerLetter)) {
    return true;
  } else {
    return false;
  }
}
