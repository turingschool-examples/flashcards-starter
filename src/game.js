const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const gameFunctions = require('./card')



function start() {
  // Creates cards
  const cards = prototypeQuestions.map((data) => {
      return gameFunctions.createCard(data.id, data.question, data.answers, data.correctAnswer);
  });

  // Puts cards in a deck
  const deck = gameFunctions.createDeck(cards);

  // Creates a new round using the deck
  const round = gameFunctions.createRound(deck);

  // Display the welcome message in the CLI
  printMessage(deck);

  // Kick off our helper functions that allow interaction via the CLI
  printQuestion(round);
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${gameFunctions.countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion, start };

if(require.main === module) {
  start()
}