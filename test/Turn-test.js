const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turn')

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate if user guess is correct or incorrect', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'); 
    const correct = evaluateGuess('object', card);
    const incorrect = evaluateGuess('function', card);

    expect(correct).to.equal('Correct!');
    expect(incorrect).to.equal('Incorrect!');
  });
});