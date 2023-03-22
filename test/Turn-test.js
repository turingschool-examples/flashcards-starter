const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
    var turn, card14
    beforeEach(() => {
        card14 = new Card(14, "Which iteration method can turn an array into a single value of any data type?", ["reduce()", "map()", "filter()"], "reduce()")

        turn = new Turn();
    })
    
    it('should be a function', () => {
      expect(Turn).to.be.a('function');
    });

    it('should instantiate a new turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should take in the user guess', () => {
        turn = new Turn("reduce()", card14);

        expect(turn.guess).to.equal("reduce()");
    });

    it('should take in a flashcard', () => {
        turn = new Turn("reduce()", card14);

        expect(turn.card).to.equal(card14);
    });

    it('should return the guess', () => {
        turn = new Turn("reduce()", card14);

        expect(turn.returnGuess()).to.equal("reduce()");
    });

    it('should return the card', () => {
        turn = new Turn("reduce()", card14);

        expect(turn.returnCard()).to.equal(card14);
    });

    it("should evaluate guess to true or false", () => {
        turn = new Turn("reduce()", card14);

        expect(turn.evaluateGuess()).to.be.true;

        turn = new Turn("map()", card14);

        expect(turn.evaluateGuess()).to.be.false;
    });

    it('should give feedback', () => {
        turn = new Turn("reduce()", card14);

        expect(turn.giveFeedback()).to.equal("correct!");

        turn = new Turn("map()", card14);

        expect(turn.giveFeedback()).to.equal("incorrect!");
    });
})