const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const prototypeData = require('../src/data.js');

describe('Turn', function() {
    let testcounter = 0;
    beforeEach(function () {
        testcounter ++;
        console.log(`Turn: Test ${testcounter}`);
    });

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should store a guess', function() {
        const turn = new Turn('Array', prototypeData[1]);
        expect(turn.guess).to.equal('Array');
    });

    it('should store a currentCard', function() {
        const turn = new Turn('Variable', prototypeData[2]);
        expect(turn.currentCard).to.deep.equal(prototypeData[2]);
    });

    it('should return a guess', function() {
        const turn = new Turn('String', prototypeData[3]);
        const guess = turn.returnGuess();

        expect(guess).to.equal('String');
    });

    
}); 