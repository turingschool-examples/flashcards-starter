const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card');

describe('Turn Constructor', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  })

  it('should accept a user guess as an argument', function() {
    const turn = new Turn('New York City');

    expect(turn.guess).to.equal('New York City');
  })

  it('should accept a card as an argument', function() {
    const card = new Card(1, 'Where is the statue of liberty?', ['New York City, Paris, London'], 'New York City')
    const turn = new Turn('New York City', card);

    expect(turn.card).to.equal(card);
  })

  it('card should be a new version of the card class', function() {
    const card = new Card(1, 'Where is the statue of liberty?', ['New York City, Paris, London'], 'New York City')
    const turn = new Turn('New York City', card);

    expect(turn.card).to.be.an.instanceof(Card);
  })

})

describe('Turn Methods', function() {

  it('should be able to return the users guess', function() {
    const card = new Card(1, 'Where is the statue of liberty?', ['New York City, Paris, London'], 'New York City')
    const turn = new Turn('New York City', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal(turn.guess)
  })

  it('should be able to return the card', function() {
    const card = new Card(1, 'Where is the statue of liberty?', ['New York City, Paris, London'], 'New York City')
    const turn = new Turn('New York City', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(turn.card);
  })

  it('should be able to evaluate if a guess is true', function() {
    const card = new Card(1, 'Where is the statue of liberty?', ['New York City, Paris, London'], 'New York City')
    const turn = new Turn('New York City', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should be able to evaluate if a guess if false', function() {
    const card = new Card(1, 'Where is the statue of liberty?', ['New York City, Paris, London'], 'New York City')
    const turn = new Turn('Paris', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should be able to give feedback if the guess is correct', function() {
    const card = new Card(1, 'Where is the statue of liberty?', ['New York City, Paris, London'], 'New York City')
    const turn = new Turn('New York City', card);

    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('correct!');
  })

  it('should be able to give feedback if the guess if incorrect', function() {
    const card = new Card(1, 'Where is the statue of liberty?', ['New York City, Paris, London'], 'New York City')
    const turn = new Turn('Paris', card);

    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect!');
  })

})
