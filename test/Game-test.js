const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it('should create 30 new cards from the prototypeQuestions', () => {
        expect(game.testStart()[0].length).to.equal(30);
        expect(game.testStart()[0]).to.be.an('array');
    });

    it('should pass those cards into a deck', () => {
        expect(game.testStart()[1].cards).to.deep.equal(game.testingArray[0]);
    });

    it('should pass that deck into a round', () => {
        expect(game.testStart()[2].deck).to.deep.equal(game.testingArray[1]);
    });

    it('should assign the round to the currentRound Game property', () => {
        expect(game.testStart()[2]).to.equal(game.currentRound);
    });
});
