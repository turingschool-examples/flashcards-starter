const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { prototype } = require('../src/Card');

describe ('Turn', function() {

  let card, turn

  beforeEach('defining global variables', function () {
    card = new Card(2, 'What is a comma-separated list of related values?', '["array", "object", "function"]', 'array')
    turn = new Turn('iterators', card)
  })

  it('should be a function', function() {
    
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of a Turn', function() {
    
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should take the user\'s attempt', function() {

    expect(turn.returnGuess()).to.equal('iterators')
  })

  it('should have a method that takes in a new Card', function() {

    expect(turn.returnCard()).to.equal(card)
  })

  it('should evaluate if the user\'s guess matches the correct answer' , function() {

    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should provide a feedback based on the attempted answer', function() {

    expect(turn.giveFeedback()).to.equal('incorrect!')
  })

})