const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turns');

describe('Turns', function() {

it('should be a function', function() {
  const turn = new Turn();
  expect(Turn).to.be.a('function')
})

it('should be an instance of Turn', function() {
  const turn = new Turn()
  expect(turn).to.be.a.instanceOf(Turn)
})

it('should store a guess', function() {
  const turn = new Turn("guess")
  expect(turn.guess).to.equal("guess")
})

it('should store a card', function() {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turn = new Turn('guess', card)
  expect(turn.currentCard).to.equal(card)
})

it.skip('should return the guess', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turn = new Turn('guess', card)

  returnGuess()

  expect(turn.returnGuess()).to.equal(turn.guess)
})

it.skip('should return the Card', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turn = new Turn('guess', card)

  returnCard()

  expect(turn.returnCard()).to.equal(turn.card)
})

it.skip('should return true if guess matches correct answer on card', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turn = new Turn("object", card)

  evaluateGuess()

  expect(turn.evaluateGuess()).to.equal(true)
})

it.skip('should return string of "correct!" if guess is correct', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turn = new Turn("object", card)

  giveFeedback()

  expect(turn.giveFeedback()).to.equal('correct!')
})

it.skip('should return string of "incorrect!" if guess is incorrect', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turn = new Turn("array", card)

  giveFeedback()

  expect(turn.giveFeedback()).to.equal('incorrect!')
})
})
