const chai = require('chai');
const Game = require('../src/Game');
const Round = require('../src/Round');
const expect = chai.expect;

describe('Game', () => {

    let game;

    beforeEach(() => {
        game = new Game();
    });

    it('should create cards', () => {
        game.start();

        expect(game.cards).to.be.a('array');
    });

    it('should check round', () => {
        game.start();

        expect(game.currentRound).to.be.an.instanceOf(Round);
    });
});