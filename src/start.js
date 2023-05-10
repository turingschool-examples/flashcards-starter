const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round')

const startMock = dataSub => {
  const deck = []; 
  dataSub.forEach(data => {
    deck.push(createCard(data.id, data.question, data.answers, data.correctAnswer));
  })
  return deck;
}


module.exports = {
  startMock
}