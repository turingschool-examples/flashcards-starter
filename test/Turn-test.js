const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn, card;

  it.skip('should be a function', () => {
    turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', () => {
    turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should take in an answer', () => {
    turn = new Turn('42');

    expect(turn.answer).to.equal('42');
  });

  beforeEach(() => {
    card = new Card();
    turn = new Turn('42', card);
  });

  it.skip('should take in an answer and a card', () => {    
    expect(turn.card).to.deep.equal(card);
  });

});