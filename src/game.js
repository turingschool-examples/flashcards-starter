const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


const start = () => {
  const cards = prototypeQuestions.map((element) => 
  createCard(element.id, element.question, element.answers, element.correctAnswer))
  const deck = createDeck(cards)
  const firstRound = createRound(deck)
  printMessage(deck)
  printQuestion(firstRound)
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}



module.exports = { start, printMessage, printQuestion };
