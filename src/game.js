const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { countCards, createDeck } = require('./deck');
const { createRound, takeTurn, calculatePercentageCorrect, endRound } = require('./round');
const { createCard } = require('./card')

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

const start = (data) => {
  cards = []
  data.forEach(card => {
    newCard = createCard(card.id, card.question, card.answers, card.correctAnswer)
    cards.push(newCard)
  })
  deck = createDeck(cards)
  printMessage(deck)
  round = createRound(deck)
  printQuestion(round) 
}

module.exports = { printMessage, printQuestion, start };
