const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function () {

it.skip('should be a function', function() {
  const turn = new Turn();
  expect(Turn).to.be.a("function");
})

it.skip('should be an instance of Turn', function() {
  const turn = new Turn();
  expect(turn).to.be.an.instanceOf(Turn);
})


it.skip('should store a users guess', function() {
  const turn = new Turn('pug');
  expect(turn.userGuess).to.equal('pug')
})

it('should store a Card object', function() {
  const card = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('pug', card)

  expect(turn.userGuess).to.equal('pug')
  expect(turn.card).to.deep.equal(card)

})

});

