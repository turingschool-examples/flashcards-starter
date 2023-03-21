const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

let turn;
let turn2;
let turn3;
let card;

describe('Turn', function () {
 beforeEach(function() {
    turn = new Turn()
    turn2 = new Turn('pug')
    turn3 = new Turn('pug', card)
    card = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
 })
it('should be a function', function() {
  expect(Turn).to.be.a("function");
})

it('should be an instance of Turn', function() {
  expect(turn).to.be.an.instanceOf(Turn);
})

it('should store a users guess', function() {
  expect(turn2.userGuess).to.equal('pug')
})

it('should store a Card object', function() {
  expect(turn2.userGuess).to.equal('pug')
  expect(turn3.card).to.deep.equal(card)
})

it('should return a users guess', function() {
  expect(turn2.returnGuess()).to.equal('pug')
})

it('should return a card', function() {
   const card = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
   const turn = new Turn('pug', card)

   expect(turn.returnCard()).to.equal(card)
})

it('should return false when not the correct answer', function() {
    expect(turn3.evaluateGuess()).to.equal(false)
})

it('should return a message when not the correct answer', function() {
   expect(turn3.giveFeedback()).to.equal(`incorrect!`)
})

});

