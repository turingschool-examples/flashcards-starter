const chai = require('chai')
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const expect = chai.expect
const { createRound, takeTurn, calculatePercentageCorrect, endRound } = require('../src/round')
const { createDeck } = require('../src/deck');
const { start } = require('../src/game');

describe("game function", () => {
    it("should create cards")

    const startGame = start()
    console.log(startGame);
})