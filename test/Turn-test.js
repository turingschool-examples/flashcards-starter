const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  let card;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('red', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('red');
  });

  it('should store the current card in play', function() {
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return the user\'s guess', function() {
    expect(turn.returnGuess()).to.equal('red');
  });

  it('should return the card in play', function() {
    console.log({key: 10} === {key: 10})
    expect(turn.returnCard()).to.be.an.instanceof(Card);
    expect(turn.returnCard().correctAnswer).to.deep.equal(turn.card.correctAnswer);
  });

  
});
