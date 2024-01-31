// This is where your project starts.
const { createCard } = require('../flashcards/src/card');
const { createDeck, countCards } = require('../flashcards/src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../flashcards/src/round');
const { printMessage, printQuestion } = require('../flashcards/src/game');
const data = require('../flashcards/src/data');
const util = require('../flashcards/src/util');
const prototypeQuestions = data.prototypeData;

console.log('Your project is running.'); 

function start() {
    createCard(id, question, answers, correctAnswer);
    createDeck(cards);
    createRound(deck);
    printMessage(deck);
    printQuestion(round);
};

start();
