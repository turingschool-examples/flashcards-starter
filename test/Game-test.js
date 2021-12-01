const chai = require('chai');
const Game = require('../src/Game');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe("Game", function () {
    
    it("should be a function", function () {
        const game = new Game();
        expect(Game).to.be.a("function");
    });

    it("should be an instance of a Game", function () {
        const game = new Game();
        expect(game).to.be.an.instanceOf(Game);
    });

    it.skip("should keep track of current round", function () {
        const game = new Game(round);
        const round = new Round(deck = {});
        const deck = new Deck(cards);
        expect(game.currentRound).to.equal(round);
    });

    it.skip("should have a method to start a new game", function () {
        const game = new Game(round);
        const round = new Round(deck = {});
        const deck = new Deck(cards);
        expect(game.start()).to.be.a('method');
    })
})