const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const data = require('../src/data');

describe ('Game', function() {
    let card;
    let deck;
    let turn;
    let round;
    let game;

    beforeEach(function() {
        card = new Card()
        deck = new Deck(card)
        round = new Round(deck)
        turn = new Turn()
        game = new Game()
    })

    it('should make an instance of Game', function() {

        expect(game).to.be.an.instanceOf(Game)
    })

    it('should keep track of the current round', function() {

        game.start()

        expect(game.currentRound).to.be.an.instanceOf(Round)
    })

    it('should start the game', function() {

        const start = game.start()

        expect(start)
    })


})

