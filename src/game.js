const data = require('./data');
const util = require('./util');
const { createDeck } = require('./deck');
const { createRound } = require('./round')

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function countCards(deck){
  return deck.length;
}

function evaluateGuess(guess, correctAnswer){
  if(guess === correctAnswer){
    return 'Correct!';
  } else {
    return 'Incorrect!';
  }
}

function start(){
  const deck = createDeck();
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round)
}

module.exports = { printMessage, printQuestion, evaluateGuess, start };
