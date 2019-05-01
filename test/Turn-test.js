const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should return the user\'s guess', function() {
    const card = new Card;
    const turn = new Turn('hamster', card);
    turn.returnGuess();
    expect(turn.userGuess).to.equal('hamster');
  });

  it('should return the current card being played', function() {
    const card = new Card;
    const turn = new Turn('hamster', card);
    turn.returnCard();
    expect(turn.currentCard).to.equal(card);
  })
});