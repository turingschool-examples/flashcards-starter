const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

    beforeEach(() => {
        const card14 = new Card(14, "Which iteration method can turn an array into a single value of any data type?", ["reduce()", "map()", "filter()"], "reduce()")
    })
    
    it('should be a function', () => {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it('should instantiate a new turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should take in the user guess', () => {
        const turn = new Turn("reduce()", card14);
        expect(turn.guess).to.equal("reduce()");
    })

    it('should take in a flashcard', () => {
        const turn = new Turn("reduce()", card14);
        expect(turn.card).to.equal(card14);
    })

    it('should return the guess', () => {
        
    })
})