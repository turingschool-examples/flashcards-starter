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

function takeTurn(guess, round) {
  const correctAnswer = round.currentCard.correctAnswer
  const comment = evaluateGuess(guess, correctAnswer)
  if (guess !== correctAnswer) {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns ++
  round.currentCard = round.deck[round.turns]
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
