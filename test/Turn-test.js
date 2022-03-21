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

  it('should pass through the user\'s guess to the question and a Card object for the current card in play', function() {
    const card = new Card();
    const turn = new Turn('Guess', card);
    expect(turn.guess).to.equal('Guess');
    expect(turn.card).to.equal(card);
  });

});
