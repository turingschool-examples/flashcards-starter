// MOCK START FUNCTION FOR TESTING //

const { createDeck, createRound } = require('./round')

const startMock = dataSub => {
  const deck = createDeck(dataSub);
  const round = createRound(deck);
  return round;
};

module.exports = {
  startMock
};