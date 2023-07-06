const data = require('./data');
const { createCard } = require('../src/card')
const { createDeck, createRound, countCards} = require('../src/round')
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function startGame() {
  const cards = makeCards(prototypeQuestions)
  const deck = createDeck(cards);
  const firstRound = createRound(deck);
  printMessage(deck)
  printQuestion(firstRound)
}

function makeCards(cardsData) {
  var result = []
  for (let i = 0; i < cardsData.length; i++) {
    var cardData = cardsData[i];
    var card = createCard(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
    result.push(card);
  }
  return result
}

module.exports = { 
  printMessage, 
  printQuestion, 
  startGame };
