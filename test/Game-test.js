const chai = require('chai');
const Card = require('../src/Card.js');
const expect = chai.expect;
const data = require('../src/data.js');
const Deck = require('../src/Deck.js');
const Game = require('../src/Game.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');
const prototypeQuestions = data.prototypeData

describe('Game', function () {
    
    it('Should be a function', function () {

        expect(Game).to.be.a('function')
    });

    it('Should keep track of the current round', function() {

        const game = new Game()

        expect(game.currentRound).to.equal(0)
    });

    it('Should have a start method to start the game and create cards', function() {

        const game = new Game()

        game.createCards()
     
        expect(game.createCards()).to.deep.equal(prototypeQuestions)

    });

    it('Should place the cards in a deck', function() {

        const game = new Game()
        const deck = new Deck(game.createCards())

        game.createCards()
        game.createDeck()
        expect(deck.cards).to.deep.equal(prototypeQuestions)
    });

    it('Should create a new round using the deck', function () {

        const game = new Game()
        const deck = new Deck(game.createCards())
        const round = new Round(deck)

        game.createCards()
        game.createDeck()
        game.createRound()
        expect(round.deck).to.deep.equal(deck)
        expect(round.currentCard).to.equal(round.deck.cards[0])
    });
});