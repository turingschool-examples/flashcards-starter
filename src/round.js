const { evaluateGuess } = require('../src/turn.js');

function createRound(deck) {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0, 
    incorrectGuesses: []
  };
};

function takeTurn(guess, round) {
  round.turns++;
  round.currentCard = round.deck[round.turns];
  if (guess !== round.currentCard.correctAnswer) {
    round.incorrectGuesses.push(round.currentCard.id);
  };
  return evaluateGuess(guess, round.currentCard.correctAnswer);
};

module.exports = { 
  createRound,
  takeTurn
};