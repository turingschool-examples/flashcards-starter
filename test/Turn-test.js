const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card;
  let turn;
  beforeEach(() => {
      card = new Card(1, 'What is 1 + 1 ?', ['2', '3', '4'], '2');
      turn = new Turn('2', card);
    });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return a guess', () => {
    expect(turn.returnGuess()).to.equal('2');
  });

  it('should return a card', () => {
      expect(turn.returnCard()).to.equal(turn.card);
  })

  it('should evaluate a guess', () => {
    expect(turn.evaluateGuess()).to.equal('2')
  })
})
