const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { prototype } = require('../src/Card');

describe ('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn()
    
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of a Turn', function() {
    const turn = new Turn()
    
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should take the user\'s attempt', function() {
    const turn = new Turn('iterators')

    expect(turn.returnGuess()).to.equal('iterators')
  })

  it('should have a method that takes in a new Card', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', '["array", "object", "function"]', 'array')
    const turn = new Turn('iterators', card)

    expect(turn.returnCard()).to.equal(card)
  })

  it('should evaluate if the user\'s guess matches the correct answer' , function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', '["array", "object", "function"]', 'array')
    const turn = new Turn('iterators', card)

    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should provide a feedback based on the attempted answer', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', '["array", "object", "function"]', 'array')
    const turn = new Turn('iterators', card)

    expect(turn.giveFeedback()).to.equal('incorrect!')
  })

})