const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const card = require('./card');
const { createCard, createDeck, createRound, countCards } = require('./card')

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  // console.log('id: ',prototypeQuestions[0].id)
  
  
  let cards = prototypeQuestions.map(card => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer)
  })
  // console.log('cards: ',cards)
  let deck = createDeck(cards)

  // console.log('deck: ', deck)

  let round = createRound(deck)

  console.log('round: ', round)
  round.startTime = new Date();
  printMessage(deck)
  printQuestion(round)
}

module.exports = { printMessage, printQuestion, start };
