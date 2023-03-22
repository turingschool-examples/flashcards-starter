const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
    var turn, deck, round, card1, card7, card14
    beforeEach(() => {
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card7 = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()");
        card14 = new Card(14, "Which iteration method can turn an array into a single value of any data type?", ["reduce()", "map()", "filter()"], "reduce()");
    
        turn = new Turn();
        deck = new Deck([card1, card7, card14]);
        round = new Round(deck);
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });
  
    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    }); 

    it('should take in a deck', () => {
        expect(round.deck).to.equal(deck);
    });

    it('should return the current card being played', () => {
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should start with zero turn count', () => {
        expect(round.turns).to.equal(0);
    });
    
    it('should update turns count', () => {
        round.takeTurn();

        expect(round.turns).to.equal(1);
    });

    it('should update current card to next card', () => {
        round.takeTurn();

        expect(round.currentCard).to.equal(card7);

        round.takeTurn();

        expect(round.currentCard).to.equal(card14);
    });

    it('should start with zero incorrect guesses', () => {
        expect(round.incorrectGuesses).to.be.lengthOf(0);
    });

    it('should store incorrect guesses in an array', () => {

    });

    it('should return a feedback', () => {
        
    });
})