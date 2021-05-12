const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', function() {
    const turn = new Turn('object');

    expect(turn.guess).to.equal('object');
  });

  it('should store an instances of Card class', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);

    expect(turn.flashCard).to.equal(card);
  });
  it('should returns the user’s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.deep.equal(turn.guess);
  });
  it('should returns the Card info', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);

    turn.returnCard();

    expect(turn.returnCard()).to.deep.equal(turn.flashCard);
  });
  // evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card.
  it('should returns a boolean if the user’s guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');

    const turn = new Turn('object', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.deep.equal(this.result, true);
  });
  // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
  it('should returns either ‘incorrect!’ or ‘correct!’ based on the user’s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.deep.equal('correct');
  });
});
