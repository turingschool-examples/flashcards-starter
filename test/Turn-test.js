const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card, turn
  beforeEach(() => {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });
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
    const turn = new Turn('object', card);

    expect(turn.flashCard).to.equal(card);
  });
  it('should returns the user’s guess', function() {
    const turn = new Turn('object', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.deep.equal(turn.guess);
  });
  it('should returns the Card info', function() {
    const turn = new Turn('object', card);

    turn.returnCard();

    expect(turn.returnCard()).to.deep.equal(turn.flashCard);
  });
  it('should returns a boolean if the user’s guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('array', card);

    turn1.evaluateGuess();

    expect(turn1.evaluateGuess()).to.be.false;

    const turn2 = new Turn('object', card);

    turn2.evaluateGuess();

    expect(turn2.evaluateGuess()).to.be.true;
  });
  it('should returns either ‘incorrect!’ or ‘correct!’ based on the user’s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('object', card);

    turn1.evaluateGuess();
    turn1.giveFeedback();

    expect(turn1.giveFeedback()).to.deep.equal('correct');

    const turn2 = new Turn('array', card);

    turn2.evaluateGuess();
    turn2.giveFeedback();

    expect(turn2.giveFeedback()).to.deep.equal('incorrect');
  });
});
