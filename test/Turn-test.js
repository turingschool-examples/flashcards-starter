const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

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

  it('should be able to store a player\'s guess', function() {
    const guess = 'potato';
    const turn = new Turn(guess)
    expect(turn.guess).to.equal('potato');
  });

  it('should be able to store a card object in play', function() {
    const card = new Card()
    const turn = new Turn(card)
    expect(turn.card).to.equal(new Card(id, question ))
  })
})