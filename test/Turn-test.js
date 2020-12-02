const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn, card;

  beforeEach(() => {
    card = new Card();
    turn = new Turn();
  });

  it.skip('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should take in an answer', () => {
    turn = new Turn('42');

    expect(turn.answer).to.equal('42');
  });

  it.skip('should take in an answer and a card', () => {    
    turn = new Turn('MORE!', card);

    expect(turn.card).to.deep.equal(card);
  });

});