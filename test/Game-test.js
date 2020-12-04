const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Game', function() {
    let game

    beforeEach(() => {
        game = new Game();
    })

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    })

    it('should be an instance of the Game', function() {
        expect(game).to.be.an.instanceof(Game);
    })

    it('should track current round', function() {

        expect(game.currentRound).to.be.an('object')
    })
})