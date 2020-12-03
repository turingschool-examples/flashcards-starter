const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');




describe('Game', function() {

    it('should have a current game', function() {

        const game = new Game();

        expect(game.currentRound).to.be.a('object');
    });

    it('should make cards at start of game', function() {

        const game = new Game();

        game.start();

        expect(game.currentRound.deck[0]).to.be.an.instanceof(Card);
    });
    it('should make a deck at start of game', function() {

        const game = new Game();

        game.start();

        expect(game.currentDeck).to.be.an.instanceof(Deck);
    });
    it('should create a new round at start', function() {

        const game = new Game();

        game.start();

        expect(game.currentRound).to.be.an.instanceof(Round);
    })

})