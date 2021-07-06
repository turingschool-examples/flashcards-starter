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

})
