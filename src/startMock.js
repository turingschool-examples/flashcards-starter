const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('./round')
const { printQuestion, printMessage } = require('./game');

const startMock = dataSub => {
  const deck = createDeck(dataSub);
  const round = createRound(deck);
  printQuestion(round);
  printMessage(deck);
  return round;
}

module.exports = {
  startMock
}