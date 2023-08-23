const { evaluateGuess } = require('../src/guess');
const { countCards } = require('../src/deck');

const createRound = (deck, currentCardIndex, turns, incorrectGuesses) => {
  let round = {
    deck: deck,
    currentCard: deck.cards[currentCardIndex],
    turns: turns || 0,
    incorrectGuesses: [] || incorrectGuesses,
  };
  return round;
};

const takeTurn = (guess, round) => {
  round.turns += 1;
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (feedback === 'Incorrect') {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.currentCardIndex += 1;
  return feedback;
};

const calculatePercentCorrect = round => {
  const numOfQuestions = countCards(round.deck);
  const numIncorrect = round.incorrectGuesses.length;
  const percentCorrect = Math.round((1 - numIncorrect / numOfQuestions) * 100);
  return percentCorrect;
};

const endRound = round => {
  const percentCorrect = calculatePercentCorrect(round);
  return `** Round Over! ** You Answered ${percentCorrect}% of the questions correctly.`;
};

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};
