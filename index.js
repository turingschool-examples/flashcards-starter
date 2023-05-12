// This is where your project starts.
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const util = require('./src/util');
const { countcards, createDeck } = require('./src/deck');
const { createRound, takeTurn, calculatePercentageCorrect, endRound } = require('./src/round');
const { evaluateGuess } = require('./src/turn');
const { start } = require('./src/game')

start(prototypeQuestions);