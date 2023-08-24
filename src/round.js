const { evaluateGuess } = require('../src/guess');
const { countCards } = require('../src/deck');

const createRound = (deck, currentCardIndex = 0, turns, incorrectGuesses) => {
  let round = {
    deck: deck,
    currentCardIndex: currentCardIndex,
    turns: turns || 0,
    incorrectGuesses: [] || incorrectGuesses,
  };

  // const cardIndex =
  round.currentCard = deck.cards[currentCardIndex];

  // console.log('Inside Round Function with index', round);

  return round;
};

//MY CODE:
const takeTurn = (guess, round) => {
  round.turns += 1;
  //run evaluateGuess
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
  //if incorrect .push (the card.id) to round.incorrectGuesses
  if (feedback === 'Incorrect') {
    round.incorrectGuesses.push(round.currentCard.id);
    // console.log(round.currentCard.id);
  }
  round.currentCardIndex += 1; //Nan - why?
  //takeTurn can't access the properties of the round object
  //so round.currentCard gets the object but have to use round.currentCardIndex to define it
  round.currentCard = round.deck.cards[round.currentCardIndex];

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
