const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  let turn;
  let card;
  beforeEach(() => {
    card = new Card(1, "What is Mark's dog", ['dachshund', 'beagle', 'husky'], 'dachshund');
    turn = new Turn('dachshund', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a string of the user\'s guess', function() {
    expect(turn.guess).to.equal('dachshund');
  });

  it('should take in a card object for the current card in play', function() {
    expect(turn.card).to.equal(card);
  });

});

describe('returnGuess', function() {
  let turn;
  let card;
  beforeEach(() => {
    card = new Card(1, "What is Mark's dog", ['dachshund', 'beagle', 'husky'], 'dachshund');
    turn = new Turn('dachshund', card);
  });

  it('should be a function', function() {
    expect(turn.returnGuess).to.be.a('function');
  });

  it('should return the user\'s guess', function() {
    expect(turn.returnGuess()).to.equal('dachshund');
  });

});

describe('returnCard', function() {
  let turn;
  let card;
  beforeEach(() => {
    card = new Card(1, 'What is Mark\'s dog?', ['dachshund', 'beagle', 'husky'], 'dachshund');
    turn = new Turn('dachshund', card);
  });

  it('should be a funtion', function() {
    expect(turn.returnCard).to.be.a('function');
  });

  it('should return an object', function() {
    expect(turn.returnCard()).to.be.an('object');
  });

  it('should have specific properties', function() {
    expect(turn.returnCard().answers).to.deep.equal(['dachshund', 'beagle', 'husky'])
    expect(turn.returnCard().question).to.equal('What is Mark\'s dog?');
    expect(turn.returnCard().correctAnswer).to.equal('dachshund');
  })

});
