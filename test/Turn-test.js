const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn, card;

  beforeEach(() => {
    turn = new Turn();
  });

  it('should be a function', () => {    
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {    
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in an answer', () => {
    turn = new Turn('42');

    expect(turn.answer).to.equal('42');
  });

  beforeEach(() => {
    card = new Card();
    turn = new Turn('42', card);
  });

  it('should take in an answer and a card', () => {    
    expect(turn.card).to.deep.equal(card);
  });

  it('should return the given guess', () => {
    const guess = turn.returnGuess();

    expect(guess).to.equal('42');
  });

});