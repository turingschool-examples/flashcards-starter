const { evaluateGuess } = require('../src/card');

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
  const result = evaluateGuess(guess, round.currentCard.correctAnswer)

  if (result === 'Incorrect') {
    round.incorrectGuesses.push(round.currentCard.id);
  }

  round.turns++;
  round.currentCard = round.deck[round.turns];

  return result;
}

function calculatePercentCorrect(round) {
  const percentageCorrect = (round.deck.length - round.incorrectGuesses.length) / (round.deck.length) * 100;
  return parseFloat(percentageCorrect.toFixed(2));
}

function endRound(round) {
  const endRoundMessage = `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly`;
  console.log(endRoundMessage);
  return endRoundMessage;
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}