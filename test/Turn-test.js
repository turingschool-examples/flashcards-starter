const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');

describe('Turn', function() {
  let turn;

  beforeEach(() => {
    turn = new Turn('dachshund', card1)
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
    const card1 = new Card(1, "What is Mark's dog", ['dachshund', 'beagle', 'husky'], 'dachshund');
    expect(turn.card).to.equal(card1);
  });

});
