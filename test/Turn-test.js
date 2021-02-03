const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const data = require('../src/data');

const testData = data.prototypeData.slice(0, 5);

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should return user guess', function() {
    const turn = new Turn('object', testData[0]);

    // turn.returnGuess();

    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return current card', function() {
    const turn = new Turn('object', testData[0]);

    // turn.returnCard();

    expect(turn.returnCard()).to.equal(testData[0]);
  });

  it('should evaluate user guess', function() {
    const correctGuess = new Turn('object', testData[0]);
    const incorrectGuess = new Turn('array', testData[0]);

    // correctGuess.evaluateGuess();
    // incorrectGuess.evaluateGuess();

    expect(correctGuess.evaluateGuess()).to.equal(true);
    expect(incorrectGuess.evaluateGuess()).to.equal(false);
  });

  it('should give appropiate feedback', function() {
    const correctGuessFeedback = new Turn('array', testData[1]);
    const incorrectGuessFeedback = new Turn('function', testData[1]);

    correctGuessFeedback.evaluateGuess();
    incorrectGuessFeedback.evaluateGuess();
    // correctGuessFeedback.giveFeedback();
    // incorrectGuessFeedback.giveFeedback();

    expect(correctGuessFeedback.giveFeedback()).to.equal('Correct!');
    expect(incorrectGuessFeedback.giveFeedback()).to.equal('Incorrect!');
  });
});
