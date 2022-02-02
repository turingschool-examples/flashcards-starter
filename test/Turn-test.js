const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card = null;
  let turn = null;

  function beforeEach() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  };

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a players guess', function() {
    expect(turn.playerGuess).to.equal('object');
  });

  it('should be able to return player guess', function() {
    turn.returnGuess();

    expect(turn.playerGuess).to.equal('object');
  });

  it('should be able to store the current card', function() {
    expect(turn.currentCard).to.deep.equal(card);
  });

  it('should be able to return card', function() {
    turn.returnCard(card);

    expect(turn.currentCard).to.deep.equal(card);
  });

  it('should be able to evaluate the players guess', function() {
    turn.evaluateGuess();

    expect(turn.isPlayerCorrect).to.deep.equal(true);
  });

  it('should give the player feedback', function() {
    turn.evaluateGuess();
    turn.giveFeedBack();

    expect(turn.giveFeedBack()).to.deep.equal('correct!');
  });
})
