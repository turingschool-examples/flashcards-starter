const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('evaluateGuess', function() {
  let correctAnswer;
  beforeEach(function () {
    correctAnswer = 'potato'
  });
  
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should declare correct if user guess is correct', function() {
    const guess = 'potato'
    
    const turnOutcome = evaluateGuess(guess, correctAnswer);

    expect(turnOutcome).to.equal("Correct!");
  });  

  it('should declare incorrect if user guess is incorrect', function() {
    const guess = "tomato"

    const turnOutcome = evaluateGuess(guess, correctAnswer);

    expect(turnOutcome).to.equal("Incorrect!");
  });  
});
