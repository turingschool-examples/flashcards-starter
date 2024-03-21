const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('./round')


function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function startGame(deck) {
 var deck = createDeck(prototypeQuestions)
 var round = createRound(deck)
printMessage(deck)
printQuestion(round)
}


module.exports = {
   printMessage, 
   printQuestion,
   startGame 
  };
