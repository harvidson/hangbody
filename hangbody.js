var words = [
  "pie",
  "tree",
  "meal",
  "fly",
  "bird",
  "fancy",
  "optimism",
  "park",
  "wheel",
  "kitty",
  "leaves",
  "wind",
  "playground",
  "camping",
  "tiptoe",
  "blossom",
  "treehouse",
  "paint",
  "kite",
  "dream",
  "heart",
  "branch",
  "mystery",
  "house",
  "street",
  "sign",
  "keys",
  "frost",
  "kitchen",
  "table",
  "fridge",
  "couch",
  "pencil",
  "history",
  "typewriter",
  "speaker",
  "coffee",
  "hobby",
  "practice",
  "soccer",
  "basketball",
  "treaty",
  "election",
  "map",
  "geography",
  "mountain",
  "doctor",
  "vitamin",
  "market",
  "broccoli",
  "kale",
  "pasta",
  "cheese",
  "omlette",
  "trickster",
  "parakeet",
  "mother",
  "celebration",
  "bookshelf",
  "stool",
  "fern",
  "rubber",
  "hour",
  "watch",
  "clock",
  "freedom",
  "spoon",
  "picture",
  "wallpaper",
  "ivy",
  "ransom",
  "pirate",
  "treasure",
  "candle",
  "triumph",
  "heater",
  "justice",
  "uncertainty",
  "possibility",
  "excitement",
  "hope",
  "laughter",
  "hiccup",
  "daughter",
  "father",
  "liar",
  "ocean",
  "elf",
  "dragon",
  "snail",
  "octopus",
  "wrench",
  "candidate",
  "pliers",
  "jigsaw",
  "puzzle",
  "flight",
  "school",
  "university",
  "highway",
  "robber",
  "apartment",
  "people",
  "ghost",
  "boot",
  "porch",
  "foyer",
  "garage",
  "alder",
  "poplar",
  "clover",
  "petunia",
  "blower",
  "drum",
  "corner",
  "carpet",
  "hook",
  "root",
  "rooster",
  "goat",
  "backpack",
  "toaster",
  "oven",
  "bush",
  "path",
  "trail",
  "apple",
  "banana",
  "spinach",
  "pepper",
  "cumin",
  "rosemary",
  "thyme",
  "parsely",
  "sage",
  "yeast",
  "mushroom",
  "hanger",
  "closet",
  "chain",
  "wheel",
  "doorstop",
  "hallway",
  "handle",
  "knob",
  "hinge",
  "stove",
  "windchime",
  "nest",
  "peanut",
  "pretzel",
  "spine",
  "ankle",
  "knee",
  "elbow",
  "toenail",
  "surface",
  "bottom",
  "blank",
  "side",
  "slide",
  "potato",
  "soup",
  "lentil",
  "garbanzo",
  "dandilion",
  "painting",
  "plate",
  "spaceship",
  "magazine",
  "eternity",
  "future",
  "guess",
  "plastic",
  "guest",
  "glass",
  "eyeball",
  "grass",
  "river",
  "stone",
  "pebble",
  "sand",
  "granite",
  "marble",
  "statue",
  "soil",
  "sediment",
  "monument",
  "tournament",
  "coaster",
  "cushion",
  "sheet",
  "style",
  "truck",
  "trap",
  "dust",
  "diver",
  "anchor",
  "fairy",
  "stem",
  "daisy",
  "elephant",
  "otter",
  "walrus"
  ];

//generate a random word from words
function pickWord() {
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
}

var word = pickWord();

//set up answer answerArray
function setupAnswerArray(word) {
  var array = [];
  for (var i = 0; i < word.length; i++) {
    array[i] = "_";
  }
  return array;
}

var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var guessesLeft = 10;
var wrongGuesses = {1: "head", 2: "torso", 3: "left arm", 4: "right arm", 5: "left leg", 6: "right leg", 7: "left hand", 8: "right hand", 9: "left foot. Last chance!", 10: "right foot. That's it! Up, up, and away!!"};
var wrongGuessesCount = 0;
var lettersGuessed = [];

function showPlayerProgress() {
  if (guessesLeft === 1) {
    alert(`Here's your word so far: ${answerArray.join("   ")}. You have ${guessesLeft} guess left.`);
  } else {
    alert(`Here's your word so far: ${answerArray.join("   ")}. You have ${guessesLeft} guesses left.`);
  }
}

var guess;

function getGuess() {
  if (wrongGuessesCount > 0) {
    guess = prompt(`What letter do you want to guess? (Your word so far: ${answerArray.join("   ")}. You've already guessed the following letters: ${lettersGuessed.join(", ")}.) <p>If you want to guess the whole word, or quit the game, click cancel.</p>`);
  } else {
    guess = prompt(`What letter do you want to guess? (Your word so far: ${answerArray.join("   ")}.) If you want to guess the whole word, or quit the game, click cancel.`);
  }
  return guess;
}

var continueGame = true;

function guessWholeWordOrQuit(guess) {
  if (guess === null) {
    continueGame = false;
    var wordGuess = prompt(`What do you think the word is? So far you've got: "${answerArray.join("   ")}" To quit, click cancel again.`);

    //allow to quit
    if (wordGuess === null) {
      guessesLeft = 0;
      return guessesLeft;
    //evaluate word guess
      } else {
         wordGuess = wordGuess.toLowerCase();
          if (wordGuess === word) {
            remainingLetters = 0;
            return remainingLetters;
          } else {
            guessesLeft = 0;
            return guessesLeft;
            }
      }
  }
}

var validGuess = true;
//evaluate guess
function evaluateGuess(guess) {
  //check to make sure single letter entered
  if (guess.length !== 1) {
    alert("Please enter a single letter.");
    validGuess = false;
  } else {
      guess = guess.toLowerCase();
      //check whether letter has already been guessed
      if (lettersGuessed.indexOf(guess) === -1) {
        lettersGuessed.push(guess);
        return lettersGuessed.sort();
      } else {
          alert(`You already guessed "${guess}."`);
          validGuess = false;
        }
  }
}

function updateGameState(guess) {
  //if letter is right, update answerArray, decrease  remainingLetters; if letter is wrong, decrease guessesLeft and display body part added to hangbody

  if (word.indexOf(guess) !== -1) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        answerArray[i] = guess;
        remainingLetters--;
      }
    }
    alert(`POP! Nice one! "${guess.toUpperCase()}" is in the word.`);
  } else {
    wrongGuessesCount++;
    alert(`Nope, no "${guess}." Your body just got a ${wrongGuesses[wrongGuessesCount.toString()]}!`)
    guessesLeft--;
  }
}

var youWon = false;

function showAnswerAndCongratulatePlayer() {
  alert(`You're a hero! The answer was "${word}." The body's floating back to the ground, and you've released a little magic into the world. (**HINT: Hit okay, then try typing your word into the keyboard a time or two.**)`);
  youWon = true;
}

function showAnswerAndConsolePlayer() {
  alert("Nice try! The answer was " + "\"" + word + ".\"");
}

//  game loop
while (remainingLetters > 0 && guessesLeft > 0) {
  showPlayerProgress();
  getGuess();
  guessWholeWordOrQuit(guess);
  if (continueGame === true) {
    //reset boolean to true
    validGuess = true;
    evaluateGuess(guess);
      if (validGuess === true) {
        updateGameState(guess);
      }
  }
}

//bonus feature
function celebrateWin() {
  const pressed = [];
  const secretCode = word;

  window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
      cornify_add();
    }
  });
}

//display result of game
if (guessesLeft === 0){
  showAnswerAndConsolePlayer();
}

if (remainingLetters === 0) {
  showAnswerAndCongratulatePlayer();
  celebrateWin();
}
