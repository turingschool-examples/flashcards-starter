const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')
const data = require('../src/data')

const sampleCards =  [{
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  }, {
    "id": 2,
    "question": "What is a comma-separated list of related values?",
    "answers": ["array", "object", "function"],
    "correctAnswer": "array"
  }, {
    "id": 3,
    "question": "What type of prototype method directly modifies the existing array?",
    "answers": ["mutator method", "accessor method", "iteration method"],
    "correctAnswer": "mutator method"
  }, {
    "id": 4,
    "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
    "answers": ["mutator method", "accessor method", "iteration method"],
    "correctAnswer": "accessor method"
  }]