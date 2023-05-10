const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turn')

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate if user guess is correct or incorrect', function() {
    
    const correct = evaluateGuess("object", "object");
    const incorrect = evaluateGuess("array", "object");

    expect(correct).to.equal("Correct!");
    expect(incorrect).to.equal("Incorrect");
  });
});