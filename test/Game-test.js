const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function () {
    it('should be a function', function () {
        const game = new Game();
        expect(Game).to.be.a('function');
    })

    it('should create a new instance of a Game', function () {
        const newGame = new Game();
        expect(newGame).to.be.an.instanceOf(Game);
    });

    it('should create new instances of cards when game starts', function () {
        const newGame = new Game();
        expect(newGame.currentRound.deck.cards[0]).to.be.an.instanceOf(Card);
    });

    it('should create new instances of cards when game starts', function () {
        const newGame = new Game();
        expect(newGame.currentRound.deck).to.be.an.instanceOf(Deck);
    });

    it('should create a new instance of round when game starts', function () {
        const newGame = new Game();
        expect(newGame.currentRound).to.be.an.instanceOf(Round);
    })
})
