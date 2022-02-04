const chai = require('chai');
const expect = chai.expect;

const Turns = require('../src/Turns');

describe('Turns', function() {

it.skip('should be a function', function() {
  const turn = new Turns();
  expect(Turns).to.be.a('function')
})

it.skip('should be an instance of Turns', function() {
  const turns = new Turns()
  expect(turns).to.be.a.instanceOf(Turns)
})

it.skip('should store a guess', function() {
  const turns = new Turns(guess)
  expect(turns.guess)to.equal(turns.guess)
})

it.skip('should store a card', function() {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turns = new Turns('guess', card)
  expect(turns.card).to.equal(card)
})

it.skip('should return the guess', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turns = new Turns('guess', card)

  returnGuess()

  expect(turns.returnGuess()).to.equal(turns.guess)
})

it.skip('should return the Card', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turns = new Turns('guess', card)

  returnCard()

  expect(turns.returnCard()).to.equal(turns.card)
})

it.skip('should return true if guess matches correct answer on card', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turns = new Turns("object", card)

  evaluateGuess()

  expect(turns.evaluateGuess())to.equal(true)
})

it.skip('should return string of "correct!" if guess is correct', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turns = new Turns("object", card)

  giveFeedback()

  expect(turns.giveFeedback()).to.equal('correct!')
})

it.skip('should return string of "incorrect!" if guess is incorrect', () => {
  const card = new Card({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  })
  const turns = new Turns("array", card)

  giveFeedback()

  expect(turns.giveFeedback()).to.equal('incorrect!')
})
})
