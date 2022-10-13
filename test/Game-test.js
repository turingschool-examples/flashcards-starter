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
    }) 

    it('should create new instances of cards', () => {
        game.createGameInfo();

        expect(game.cards[0]).to.be.an.instanceOf(Card);
    })

    it('should create a new deck and round', () =>{
        game.createGameInfo();

        expect(game.deck).to.be.an.instanceOf(Deck)
        expect(game.currentRound).to.be.an.instanceOf(Round)
    })
 
})