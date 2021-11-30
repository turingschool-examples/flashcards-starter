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

  it('should ')

})
