const data = require('./data');
const { createCard } = require('../src/card')
const { createDeck, createRound, countCards, startTimer } = require('../src/round')

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
  startTimer()
}
  

function makeCards(cardsData) {
  var result = []
  for (let i = 0; i < cardsData.length; i++) {
    const cardData = cardsData[i];
    const card = createCard(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
    result.push(card);
  }
  return result
}

module.exports = { 
  printMessage, 
  printQuestion, 
  startGame,
 };
