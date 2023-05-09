const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turns');

describe('evaluateGuess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function')
  })
  
  it('should be able to evaluate as correct if the guess is correct', function(){
    let guess = 'object'
    let correctAnswer = 'object'
    evaluation = evaluateGuess(guess, correctAnswer)
    expect(evaluation).to.equal('correct!')
  })
  
  it('should be able to evaluate as incorrect if the guess is incorrect', function(){
    let guess = 'object'
    let correctAnswer = 'array'
    evaluation = evaluateGuess(guess, correctAnswer)
    expect(evaluation).to.equal('incorrect!')
  })
})