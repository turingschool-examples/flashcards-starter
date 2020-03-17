const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card')


describe('Turn', function() {

it('should be function', function() {
const turn = new Turn();
expect(Turn).to.be.a('function');
});

it('should be an instance of Turn', function() {
  const turn = new Turn();
  expect(turn).to.be.an.instanceof(Turn);
})

it('should have two arguments', function() {
  const card =  new Card(1, 'What is the meaning of life?', ['happiness', 'love', '42'], '42');
  const turn = new Turn('42', card);
  expect(turn.userGuess).to.equal('42');
  expect(turn.currentCard).to.equal(card)
})

it('should be able to return guess', function() {
  const card = new Card(2, 'huh?', ['what?', 'hmmm?', 'did you say something?'], 'what?');
  const turn = new Turn('what?', card);
  expect(turn.returnGuess()).to.equal('what?');
})

it('should return current card', function() {
  const card = new Card(2, 'huh?', ['what?', 'hmmm?', 'did you say something?'], 'what?');
  const turn = new Turn('what?', card);
  expect(turn.returnCard()).to.equal(card);
})

it('should return if answer is correct', function() {
  const card = new Card(2, 'huh?', ['what?', 'hmmm?', 'did you say something?'], 'what?');
  const turn2 = new Turn('what?', card);
  const turn = new Turn('did you say something?', card);

  expect(turn2.evaluateGuess()).to.equal(true);
  expect(turn.evaluateGuess()).to.equal(false)
})

it('should say weather or not the answer is correct', function() {
  const card = new Card(2, 'huh?', ['what?', 'hmmm?', 'did you say something?'], 'what?');
  const turn1 = new Turn('did you say something?', card);
  const turn2 = new Turn('what?', card);

  expect(turn1.giveFeeback()).to.equal('incorrect');
  expect(turn2.giveFeeback()).to.equal('correct');
})

})
