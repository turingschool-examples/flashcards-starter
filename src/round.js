const { evaluateGuess } = require('../src/guess');
const { countCards } = require('../src/deck');

//My CODE:
// const createRound = (
//   deck,
//   currentCardIndex = 0,
//   turns = 0,
//   incorrectGuesses = []
// ) => {
//   let round = {
//     deck: deck,
//     currentCardIndex: currentCardIndex, // Make sure this is set correctly
//     turns: turns,
//     incorrectGuesses: incorrectGuesses,
//   };
//   //set current card
//   round.currentCard = deck[currentCardIndex];

//   return round;
// };

//JOHANN's
// const createRound = (
//   deck,
//   currentCardIndex = 0,
//   turns = 0,
//   incorrectGuesses = []
// ) => {
//   let round = {
//     deck: deck,
//     currentCardIndex: currentCardIndex,
//     turns: turns,
//     incorrectGuesses: incorrectGuesses,
//   };
//   // set current card
//   round.currentCard = deck[currentCardIndex];

//   return round;
// };

const createRound = (deck, currentCardIndex, turns, incorrectGuesses) => {
  let round = {
    deck: deck,
    currentCard: deck.cards[currentCardIndex],
    turns: turns || 0,
    incorrectGuesses: [] || incorrectGuesses,
  };
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
  round.currentCardIndex += 1;
  return feedback;
};

//JOHANN's
// const takeTurn = (guess, round) => {
//   // increment turn
//   round.turns += 1;

//   let guessResult = evaluateGuess(guess, round.currentCard);
//   let feedback;

//   if (guessResult === 'incorrect') {
//     roundObj.incorrectGuesses.push(round.currentCard.id);
//     feedback = giveFeedback('incorrect');
//   } else {
//     feedback = giveFeedback('correct');
//   }

//   // move to next card
//   round.currentCardIndex += 1;
//   // update current card
//   round.currentCard = round.deck[round.currentCardIndex];

//   return feedback;
// };

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
