const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn;
  let card;

  beforeEach(function() {
    card = new Card(1, "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object")

    turn = new Turn("array", card)
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  })

  it('should instantiate a new instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should have a guess', function() {
    expect(turn.guess).to.equal("array");
  })

  it('should have a card', function() {
    expect(turn.card).to.equal(card)
  })

  it('should be able to return a guess', function() {
    expect(turn.returnGuess()).to.equal("array");
  })

})
