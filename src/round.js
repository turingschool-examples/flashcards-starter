// Your round will be the object that organizes guesses and records if 
// they are correct or incorrect.

const { evaluateGuess } = require("./turn")

// Your round object should meet the following requirements:
// [x] deck property that holds onto the deck object
// [x] currentCard property should start as the first card in the deck
// [x] turns property that starts as 0
// [x] incorrectGuesses property that starts as an empty array and stores the 
//    incorrectly guessed cards during a round
// [x] takeTurn(guess, round): updates the turns count, evaluates guesses, 
//    gives feedback, and stores ids of incorrect guesses
    // When a guess is made:
    // [x] The turns count is updated, regardless of whether the guess is correct or incorrect
    // [x] The next card becomes current card
    // [x] Guess is evaluated. Incorrect guesses will be stored (via card’s the id) 
    //    in an array of incorrectGuesses
    // [x] Feedback is returned regarding whether the guess is incorrect or correct
// [x] calculatePercentCorrect(round): calculates and returns the percentage of 
//    correct guesses
// * endRound(round): prints the following to the console:
//    ‘** Round over! ** You answered <>% of the questions correctly!’

// EXAMPLE:
// const round = {
//   deck: deck,
//   currentCard: currentCard,
//   turns: turns,
//   incorrectGuesses: incorrectGuesses,

// }

// const takeTurn = (guess, round)

// function calulatePercentCorrect(round)


// let currentCardIndex = 0

const createRound = (deck) => ({
  deck: deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: []
})

const takeTurn = (guess, round) => {
  round.turns += 1
  // currentCardIndex += 1
  var currentGuess = evaluateGuess(guess, round.currentCard.correctAnswer)
  if (currentGuess === 'Incorrect - please try again.') {
    round.incorrectGuesses.push(currentGuess.id)
  } else {
    round.deck.shift()
    round.currentCard = round.deck[0]
  }
  return currentGuess
}

function calculatePercentCorrect(round) {
  percentage = (round.turns - round.incorrectGuesses.length) / (round.turns) * 100
  return parseInt(percentage)
}

const endRound = round => {
  console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`)
  return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
}

module.exports = { 
  createRound,
  takeTurn,
  evaluateGuess,
  calculatePercentCorrect,
  endRound
}; 