const chai = require('chai');
const expect = chai.expect;
const { evaluateGuess } = require('../src/turns');

describe('turn', function(){
    it('evaluateGuess is a function', function(){
        expect(evaluateGuess).to.be.a('function');
    });
    it('evaluateGuess returns `correct!` if guess and correct answer are the same', function(){
        let result = evaluateGuess('object', 'object')
        expect(result).to.equal('correct!')
    });
    it('evaluateGuess returns `incorrect!` if guess and correct answer are different', function(){
        let result = evaluateGuess('array', 'object')
        expect(result).to.equal('incorrect!')
    });
});