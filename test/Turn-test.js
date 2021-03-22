const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should be able to store a guess', function() {
    const turn = new Turn('dog');
    expect(turn.guess).to.equal('dog');
  });

  it.skip('should be able to store a new card', function() {
    const card = new Card();
    const turn = new Turn('dog', card);
    expect(turn.currentCard).to.equal(card);
  });

  it.skip('should be able to return the guess', function() {
    const turn = new Turn('dog');
    expect(turn.returnGuess()).to.equal('dog');
  });

  it.skip('should be able to return the card', function() {
    const card = new Card();
    const turn = new Turn('dog', card);
    expect(turn.returnCard()).to.equal(card);
  });

});
