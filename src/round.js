const { evaluateGuess } = require('../src/guess');

const createRound = (deck, currentCardIndex, turns, incorrectGuesses) => {
  let round = {
    deck: deck,
    currentCard: deck.cards[currentCardIndex] || 0,
    turns: turns || 0,
    incorrectGuesses: [] || incorrectGuesses,
  };
  return round;
};

const takeTurn = (guess, round) => {
  round.turns += 1;
  //run evaluateGuess
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
  //if incorrect .push (the card.id) to round.incorrectGuesses
  if (feedback === 'Incorrect') {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.currentCardIndex += 1;
  return feedback;
};

module.exports = {
  createRound,
  takeTurn,
};
