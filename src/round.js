// Your round will be the object that organizes guesses and records if 
// they are correct or incorrect.

// Your round object should meet the following requirements:
// [x] deck property that holds onto the deck object
// [x] currentCard property should start as the first card in the deck
// [x] turns property that starts as 0
// * incorrectGuesses property that starts as an empty array and stores the 
//    incorrectly guessed cards during a round
// * takeTurn(guess, round): updates the turns count, evaluates guesses, 
//    gives feedback, and stores ids of incorrect guesses

// When a guess is made:
// * The turns count is updated, regardless of whether the guess is correct or incorrect
// * The next card becomes current card
// * Guess is evaluated. Incorrect guesses will be stored (via card’s the id) 
//    in an array of incorrectGuesses
// * Feedback is returned regarding whether the guess is incorrect or correct
// * calculatePercentCorrect(round): calculates and returns the percentage of 
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

const round = (deck) => ({
  deck: deck,
  currentCard: deck[0],
  turns: 0
})

module.exports = { 
  round
}; 