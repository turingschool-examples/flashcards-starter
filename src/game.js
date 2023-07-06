const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
//const card = require('./card');
const {createCard, createDeck, countCards} = require('./card');
//const round = require('./round')
const {createRound, endRound, calculatePercentCorrect} = require('./round')

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  let cards = prototypeQuestions.map(data => {
    return createCard(data.id, data.question, data.answers, data.correctAnswer) })
  
  let deck = createDeck(cards);
  let round = createRound(deck);
  
  printMessage(deck);
  printQuestion(round)
  
  if (round.turns === 30) {
    endRound(round)
  }  
}

// function restartGame() {
//   let score = calculatePercentCorrect(round)
  
// }
// endRound(round)

module.exports = { printMessage, printQuestion, start, restartGame};
