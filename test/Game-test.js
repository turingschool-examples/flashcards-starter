const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
    var turn, deck, round, game, card1, card7, card14
    beforeEach(() => {
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card7 = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()");
        card14 = new Card(14, "Which iteration method can turn an array into a single value of any data type?", ["reduce()", "map()", "filter()"], "reduce()");
    
        turn = new Turn();
        deck = new Deck([card1, card7, card14]);
        round = new Round(deck);
        game = new Game();

        game.start();
    });

    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });
  
    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceof(Game);
    }); 

    it('should keep track of current round', () => {
        expect(game.currentRound).to.be.an.instanceof(Round);
    });

    it('should create cards', () => {
        expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
    });

    it('should put cards in a deck', () => {
        expect(game.currentRound.deck).to.be.an.instanceof(Deck);
    });
})
