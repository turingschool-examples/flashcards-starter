const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { prototypeData } = require("./src/data");
const { printMessage, printQuestion } = require("./src/game");

