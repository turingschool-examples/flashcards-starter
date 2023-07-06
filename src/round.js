const { evaluateGuess } = require('../src/card');

const createRound = (deck) => {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  }
  return round
}

const takeTurn = (guess, round) => {
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer)
  if(feedback === 'incorrect!'){
    round.incorrectGuesses.push(round.currentCard.id)
  }

  round.turns += 1
  round.currentCard = round.deck[round.turns]
  return feedback
}

module.exports = {
  createRound,
  takeTurn
}
