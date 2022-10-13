const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');
const Game = require('../src/Game');

describe('Game', function() {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it('should keep track of the current round', () => {

        expect(game.currentRound).to.equal(0);
    })   
    
    it('should create cards to start a game', () => {

       game.start()

       expect(game.newCards[0]).to.be.an.instanceOf(Card);
       expect(game.newCards[1]).to.be.an.instanceOf(Card);
       expect(game.newCards[2]).to.be.an.instanceOf(Card);
    })

    it('should put the new cards in a deck', () => {

        const deck = game.start();

        expect(deck).to.be.an.instanceOf(Deck);


    })
})