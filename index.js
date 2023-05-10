const { createCard } = require("./src/card");
const { prototypeData } = require("./src/data");
const { createDeck } = require("./src/deck");
const { createRound } = require("./src/round");
const { printMessage, printQuestion } = require("./src/game");

const start = () => {
    const cards = prototypeData.map(card => createCard(card.id, card.question, card.answers, card.correctAnswer))
    const deck = createDeck(cards)
    const round = createRound(deck)
    printMessage(deck);
    printQuestion(round);
}

start()