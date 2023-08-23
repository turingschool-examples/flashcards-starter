const data = require("./src/data");
const prototypeQuestions = data.prototypeData;

const { createCard, createDeck } = require("./src/card");

const { createRound } = require("./src/round");

const { printMessage, printQuestion } = require("./src/game");

function start() {
  console.log("Your project is running...");
  const cards = prototypeQuestions.map((card) =>
    createCard(card.id, card.question, card.answers, card.correctAnswer)
  );

  const deck = createDeck(cards);

  const round = createRound(deck);

  printMessage(deck);

  printQuestion(round);
}

start();
