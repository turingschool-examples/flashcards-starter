const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');
const { createCard } = require('../src/card');

describe('turn', function() {  
  let card;  
  beforeEach(function() {
    card = createCard(
      1, 
      'What allows you to define a set of related information using key-value pairs?', 
      ['object', 'array', 'function'], 
      'object');
    })

  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate if a guess is correct', () => {
    const guess = 'object';
    playerGuess = evaluateGuess(guess, card.correctAnswer);
    expect(playerGuess).to.equal('Correct!')
  })

  it('should evaluate if a guess is incorrect', () => {
    guess2 = 'array';
    playerGuess2 = evaluateGuess(guess2, card.correctAnswer);
    expect(playerGuess2).to.equal('Incorrect - please try again.')
  })
});