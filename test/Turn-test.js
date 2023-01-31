const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  var card
  var turn
  
  beforeEach(function () {
  card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  turn = new Turn('object', card)
  })

it('should be a function', function() {
  expect(Turn).to.be.a('function');
});

it('should be an instance of Turn', function() {
  expect(turn).to.be.an.instanceof(Turn);
}); 

it('should store a users guess', function() {
  expect(turn.guess).to.be.a('string')
  expect(turn.guess).to.equal('object')
});

it('should store the current card in play', function() {
  expect(turn.card).to.equal(card)
})

});