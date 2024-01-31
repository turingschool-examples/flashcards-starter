// This is where your project starts.
const { createCard } = require('./src/card');
const { createDeck, countCards } = require('./src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('./src/round');
const { printMessage, printQuestion } = require('./src/game');
const data = require('./src/data');
const util = require('./src/util');
const prototypeQuestions = data.prototypeData;

// console.log('Your project is running.'); 

function start() {
    const cards = prototypeQuestions.filter((question) => {
        return question.id % 10 === 0
    })
    const deck = cards.map((card) => {
        return card
    })

    // createCard(id, question, answers, correctAnswer);
    // createDeck(cards);
    const round = createRound(deck);
    printMessage(deck);
    printQuestion(round);
    endRound(round);
};

start();
