const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');
describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should have a method called returnGuess', function() {
    const turn = new Turn('hi');
    expect(turn.returnGuess()).to.equal('hi')
  });

  it('should have a method called returnCard', function() {
    const card = new Card();
    const turn = new Turn('hi', card);
    expect(turn.returnCard()).to.equal(card);
  });
});
