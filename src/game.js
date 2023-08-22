const data = require("./data");
const prototypeQuestions = data.prototypeData;
// const util = require("./util");

// function printMessage(deck) {
//   console.log(`Welcome to FlashCards! You are playing with ${countCards(
//     deck
//   )} cards.
//   -----------------------------------------------------------------------`);
// }

// function printQuestion(round) {
//   util.main(round);
// }

function createRound(deck) {
  let round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
  return round;
}

function takeTurn() {}

module.exports = {
  // printMessage,
  // printQuestion,
  createRound,
  takeTurn,
};
