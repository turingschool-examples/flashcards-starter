const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
it('should be a function', function() {
  const turn = new Turn();
  expect(Turn).to.be.a('function');
});

it('should be an instance of Turn', function() {
  const turn = new Turn();
  expect(turn).to.be.an.instanceof(Turn);
}); 

it('should store a users guess', function() {
  const turn = new Turn('object')
  expect(turn.guess).to.be.a('string')
  expect(turn.guess).to.equal('object')
});

it('should store the current card in play', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('object', card)

  expect(turn.card).to.equal(card)
})

});