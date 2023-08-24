// Import necessary functions and data👇
const { createCard } = require('./src/card');
const { createDeck } = require('./src/deck');
const { createRound } = require('./src/round');
const { printMessage, printQuestion } = require('./src/game');
const { prototypeData } = require('./src/data');

const start = () => {
  const flashcardsAll = prototypeData.map(questionData => {
    return createCard(
      questionData.id,
      questionData.question,
      questionData.answers,
      questionData.correctAnswer
    );
  });
  const deck = createDeck(flashcardsAll);
  const round = createRound(deck, 0, 0, []);
  printMessage(deck);
  printQuestion(round);
};

start();

console.log('Your project is running...');
