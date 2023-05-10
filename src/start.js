const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round')

const startMock = dataSub => {
  const deck = createDeck(dataSub);
  const round = createRound(deck);
  return round;
}


module.exports = {
  startMock
}