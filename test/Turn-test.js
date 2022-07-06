const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });
    it('should have a guess and a current card each turn', function() {
        const turn = new Turn();
        // const card = new Card();
        expect(turn.userGuess()).to.equal('');
        expect(turn.currentCard()).to.equal(card);
    });
});