const { evaluateGuess } = require('../src/turn');

function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []  
  }
  return round;
}

// takeTurn(guess, round): updates the turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
// When a guess is made:
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated. Incorrect guesses will be stored (via card’s the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct

function takeTurn(guess, round) {
  const correctAnswer = round.currentCard.correctAnswer
  const comment = evaluateGuess(guess, correctAnswer)
  if (guess !== correctAnswer) {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns ++
  round.currentCard = round.deck[round.turns]
  console.log(round)
  return comment;
}

function calculatePercentCorrect() {

}

function endRound() {

}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}
