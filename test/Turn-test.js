const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a string of the user\'s guess', function() {
    const turn = new Turn('dachshund');
    expect(turn.guess).to.equal('dachshund');
  });

  it('should take in a card object for the current card in play', function() {
    const card1 = new Card(1, "What is Mark's dog", ['dachshund', 'beagle', 'husky'], 'dachshund');
    const turn = new Turn('dachshund', card1);
    expect(turn.card).to.equal(card1);
  });

});
