const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should declare correct if user is correct', function() {
    // SETUP
    const guess = "potato"
    const correctAnswer = "potato"
    //EXECUTION
    const turnOutcome = evaluateGuess(guess, correctAnswer);
    //ASSERTION
    expect(turnOutcome).to.equal("Correct!")
  });  

  it('should declare incorrect if user is incorrect', function() {
    // SETUP
    const guess = "potato"
    const correctAnswer = "tomato"
    //EXECUTION
    const turnOutcome = evaluateGuess(guess, correctAnswer);
    //ASSERTION
    expect(turnOutcome).to.equal("Incorrect!")
  });  
});

/* may need another test that makes the user re-input their guess if it
does not match one of the elements in the card.answers array */
