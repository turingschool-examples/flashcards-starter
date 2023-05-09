const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it.skip('should evaluate if a guess is correct', () => {
    guess = evaluateGuess('object', 'object');
    expect(guess).to.equal('Correct!')
  })

  it.skip('should evaluate if a guess is incorrect', () => {
    guess2 = evaluateGuess('object', 'array');
    expect(guess2).to.equal('Incorrect - please try again.')
  })
});