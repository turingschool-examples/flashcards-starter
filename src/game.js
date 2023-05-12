const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const {createRound, takeTurn, calculatePercentageCorrect, endRound} = require('../src/round');


function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}
// create start function
// start() should create cards
  // the cards that are created should be put into a deck (push???)
  // create a new instance of round, using the deck that is created
  // printMessage should be invoked 
  // printQuestion should be invoked to kick off our helper functions

const start = (data) => {
  cards = [];
  data.forEach((card) => {
    newCard = createCard(card.id, card.question, card.answers, card.correctAnswer);
    cards.push(newCard);
  });
  
  deck = createDeck(cards);
  printMessage(deck);

  round = createRound(deck);
  printMessage(round);
};

module.exports = { printMessage, printQuestion, start };
