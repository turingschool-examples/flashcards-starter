const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');


describe('Game', function() {
    let game;

    beforeEach(function() {
        game = new Game();
    });

    it('should keep track of the current round', function() {
        game.start();
        expect(game.currentRound).to.be.an.instanceOf(Round);
    });

    it('should instantiate a Deck of Card instances', function() {
        game.start();
        expect(game.currentRound.deck.cards[0]).to.deep.equal({
            id: 1,
            question: 'What allows you to define a set of related information using key-value pairs?',
            answers: [ 'object', 'array', 'function' ],
            correctAnswer: 'object'
          });
    });

})