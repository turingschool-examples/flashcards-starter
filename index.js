// This is where your project starts.
const { start } = require('./src/game');
const { createDeck } = require('./src/deck')
const { createRound } = require('./src/round')

const deck = createDeck();
const round = createRound(deck);

start(deck, round)
