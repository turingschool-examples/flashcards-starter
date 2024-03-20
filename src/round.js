const { createDeck, countCards } = require("../src/deck");
const { createCard, evaluateGuess } = require("../src/card");

function createRound(deck) {
  let round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
  return round;
}

function takeTurn(guess, round) {
  round.turns++;
  let evalCard = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (evalCard === "Incorrect") {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  let indexOfCurCard = round.deck.indexOf(round.currentCard);
  let nextIndex = indexOfCurCard + 1;
  round.currentCard = round.deck[nextIndex];
  return evalCard;
}

function calculatePercentCorrect(round) {
  let percentage = (round.turns - round.incorrectGuesses.length) / round.turns;
  return Math.floor(percentage * 100);
}

function endRound(round) {
  let percentCorrect = calculatePercentCorrect(round);
  let endMessage = `Round Over! You answered ${percentCorrect}% of the questions correctly`;
  console.log(endMessage);
  return endMessage;
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};
