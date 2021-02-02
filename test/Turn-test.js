const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function () {
  it('should be a function', function () {
    expect(Turn).to.be.a('function')
  });

  it('should instantiate a new turn object', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should instantiate a new turn with a guess', function () {
    const turn = new Turn('guess');
    expect(turn.userGuess).to.equal('guess');
  });

  it('should also take in the current card as an argument', function () {
    const turn = new Turn('guess', 
      {
        "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array"
      });
    expect(turn.card).to.be.a('object');
  });

  it('should be able to return the guess', function () {
    const turn = new Turn('guess');
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('should be able to return the card', function () {
    const turn = new Turn('guess', {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it(`should be able to tell if the user's guess is incorrect`, function() {
    const turn = new Turn('guess', {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    expect(turn.evaluateGuess()).to.equal(false)
  });

  it(`should be able to tell if the user's guess is correct`, function() {
    const turn = new Turn('array', {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should be able to give positive feedback', function() {
    const turn = new Turn('array', {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    expect(turn.giveFeedback()).to.equal('correct!')
  });

  it('should be able to give negative feedback', function() {
    const turn = new Turn('object', {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });
});