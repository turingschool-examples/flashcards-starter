const { evaluateGuess } = require('../src/guess');
const { countCards } = require('../src/deck');

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

const calculatePercentCorrect = round => {
  //how to calculate percent correct?
  //I have the number of questions (countCards)
  const numOfQuestions = countCards(round.deck);
  console.log('num of Questions', numOfQuestions);
  //I have the number of incorrectGuesses (an array round.incorrectGuesses)
  const numIncorrect = round.incorrectGuesses.length;
  console.log('num Incorrect', numIncorrect);

  const percentCorrect = Math.round((1 - numIncorrect / numOfQuestions) * 100);
  console.log('% correct', percentCorrect);
  return percentCorrect;
  //1- number wrong / 3 (number of questions) * 100
  //round.incorrectGuesses.length divided by countCards
};

const endRound = round => {
  const percentCorrect = calculatePercentCorrect(round);
  return console.log(
    `** Round Over! ** You Answered ${percentCorrect}% of the questions correctly.`
  );
};

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};
