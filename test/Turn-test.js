const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let card;
let turn;


describe('Turn', function() {
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    turn = new Turn('object', card)
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should take in a guess', function() {
    expect(turn.guess).to.equal('object');
  })

  it('should take in the current Card object', function() {
    expect(turn.card).to.equal(card)
  })

  it('should return the guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  })

  it('should return the card', function() {
    expect(turn.returnCard()).to.equal(card)
  })

  it('should evaluate the guess', function() {
    let sadTurn = new Turn('string', card)
    expect(turn.evaluateGuess()).to.equal(true);
    expect(sadTurn.evaluateGuess()).to.equal(false);
  })

  it('should return correct or incorrect', function() {
    let sadTurn = new Turn('string', card)
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(sadTurn.giveFeedback()).to.equal('incorrect!');
  })
})
