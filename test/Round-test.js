const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
    let card1, card2, card3, deck, round;

    beforeEach(function() {
      card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
      card3 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
      deck = [card1, card2, card3];
      round = new Round(deck);
    });

    it('should be a function', function() {
          expect(Round).to.be.a('function');
    });
    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round);
    });
    it('should first card of the deck be the default current card', function() {
        expect(round.returnCurrentCard()).to.equal(deck[0]);
    });
    it('should instantiate a new Turn when a guess is made', function() {
        expect(round.takeTurn()).to.be.an.instanceof(Turn);
    });
    it('should update turn count', function() {
        round.takeTurn();
        round.takeTurn();
        round.takeTurn();
        expect(round.turns).to.equal(3);
    });
    it('should be able to shuffle cards', function() {
        expect(round.returnCurrentCard()).to.equal(deck[0]);
        round.takeTurn();
        expect(round.returnCurrentCard()).to.equal(deck[1]);
        round.takeTurn();
        expect(round.returnCurrentCard()).to.equal(deck[2]);
        round.takeTurn();
    });
});