const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

    it.skip('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it.skip('should be an instance of the Round class', function() {
        const round = new Round();
        expect(round).to.be.an.instanceOf(Round);
    });

    it.skip('should store a guess', function() {
        const round = new Round('a1'):
        expect(round.guess).to.equal('a1');
    });

    it.skip('should store the first card of the deck as the current card', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        const deck = new Deck(card);
        const round = new Round('a'):
        
        expect(round.currentCard).to.deep.equal({1, 'Question1', ['a1', 'b1', 'c1'], 'a1'});
    });

})