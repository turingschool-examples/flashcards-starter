const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take a guess from the user', function() {
    const turn = new Turn('guess');
    const turn2 = new Turn('this is my guess');
    expect(turn.guess).to.equal('guess');
    expect(turn2.guess).to.equal('this is my guess');
  });

  it('should take a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card);

    expect(card).to.be.an.instanceof(Card);
    expect(card.id).to.equal(1);
    expect(turn.card.id).to.equal(1);
    expect(turn.card.correctAnswer).to.equal('object');
  });

  it('should return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object';
    const guess2 = 'array';
    const turn = new Turn(guess, card);
    const turn2 = new Turn(guess2, card);

    expect(turn.returnGuess()).to.equal('object');
    expect(turn2.returnGuess()).to.equal('array');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return whether the users guess matches the correct answer on the card or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object';
    const guess2 = 'array';
    const turn = new Turn(guess, card);
    const turn2 = new Turn(guess2, card);

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give the user feedback based on whether their guess was correct or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object';
    const guess2 = 'array';
    const turn = new Turn(guess, card);
    const turn2 = new Turn(guess2, card);

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
