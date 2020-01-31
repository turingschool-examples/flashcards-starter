const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/turn');

describe('Turn', function() {
  let card;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to guess an answer', function() {
    const turn = new Turn('never', card);
    expect(turn.guess).to.equal('never');
  })

  it('should be able to return a guess', function() {
    const turn = new Turn('true', card);
    expect(turn.returnGuess()).to.equal('true');
  });

  it('should be able to return a card', function() {
    const turn = new Turn('it always comes back as undefined', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('shoud be able to return a boolean indicating if the user\'s guess is correct', function() {
    const turn1 = new Turn('array', card);
    const turn2 = new Turn('function', card);
    const turn3 = new Turn('object', card);
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(true);

  });

  it('should be give feedback on whether user\'s answer is correct or incorrect', function() {
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);
    expect(turn1.giveFeedback()).to.equal('correct');
    expect(turn2.giveFeedback()).to.equal('incorrect');
  });
});
