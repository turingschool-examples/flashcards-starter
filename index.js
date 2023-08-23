const data = require("./src/data");
const prototypeQuestions = data.prototypeData;

const { createCard, createDeck } = require("./src/card");

const { createRound } = require("./src/round");

const { printMessage, printQuestion } = require("./src/game");

// This is where your project starts.
function start() {
  console.log("Your project is running...");
  // const cards = prototypeQuestions.map((card) =>
  //   createCard(card.id, card.question, card.answers, card.correctAnswer)
  // );
  let cards = [];
  for (let i = 0; i < 3; i++) {
    let card = createCard(
      prototypeQuestions[i].id,
      prototypeQuestions[i].question,
      prototypeQuestions[i].answers,
      prototypeQuestions[i].correctAnswer
    );
    cards.push(card);
  }

  const deck = createDeck(cards);

  const round = createRound(deck);

  printMessage(deck);

  printQuestion(round);
}

start();
