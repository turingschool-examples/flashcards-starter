const chai = require('chai');
const expect = chai.expect;

const {takeTurn, evaluateGuess, endRound } = require('../src/round');

describe('turn', function(){
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function');
    });
});

describe('check answer', function(){
    it('should be a function', function(){
        expect(evaluateGuess).to.be.a('function')
    });
    it('should return an incorrect message if guess is incorrect.', function(){
        expect(evaluateGuess('lion', 'tiger')).to.equal('incorrect!')
    })
    it('should return a correct message if guess is correct.', function(){
        expect(evaluateGuess('tiger', 'tiger')).to.equal('correct!')
    })
})

describe('round', function(){
    it('should be a function', function(){
        expect(endRound).to.be.a('function')
    });
})