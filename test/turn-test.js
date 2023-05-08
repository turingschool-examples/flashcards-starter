const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('evaluateGuess', () => {
  it('should return correct if the guess is correct', () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    userGuess = 'object';
    turn = evaluateGuess(userGuess, card);
    expect(turn).to.equal('correct!')
  })
});