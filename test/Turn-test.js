const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;
  beforeEach(() => {
      card = new Card(1, 'What is 1 + 1 ?', ['2', '3', '4'], '2');
      turn = new Turn('2', card);
    });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return a guess', () => {
    expect(turn.returnGuess()).to.equal('2');
  });

  it('should return a card', () => {
    const turn = new Turn();
    expect(turn.returnCard()).to.equal(turn.card);
  })
})
