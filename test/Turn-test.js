const chai = require('chai')
const Turn = require('../src/Turn')
const Card = require('../src/Card')
const expect = chai.expect;

//card example
let id = 1
let question = 'What allows you to define a set of related information using key-value pairs?'
let answers = ['object', 'array', 'function']
let correctAnswer = 'object'
let cardInfo = {id,question,answers,correctAnswer}

//turn example
const answer = 'object'

describe('Turn', function() {
it('should be an instance of Turn', function() {
    const card = new Card(id,question,answers,correctAnswer)
    const turn = new Turn(answer, card)
    expect(turn).to.be.an.instanceOf(Turn)
}) 
it('Should return answer given', function() {
    const card = new Card(id,question,answers,correctAnswer)
    const turn = new Turn(answer, card)
    expect(turn.returnGuess()).to.equal(answer)
})
it('Should return the Card', function() {
    const card = new Card(id,question,answers,correctAnswer)
    const turn = new Turn(answer, card)
    expect(turn.returnCard()).to.equal(card)
})
it('Should return if the answer is true or false', function() {
    const card = new Card(cardInfo)
    const turn = new Turn(answer, card)
    expect(turn.evaluateGuess()).to.equal(true)
    const turn2 = new Turn('array', card)
    expect(turn2.evaluateGuess()).to.equal(false)
})
it('Should return a correct or incorrect statement', function() {
    const card = new Card(cardInfo)
    const turn = new Turn(answer, card)
    expect(turn.giveFeedback()).to.equal('correct!')
    const turn2 = new Turn('array', card)
    expect(turn2.giveFeedback()).to.equal('incorrect!')
})
})