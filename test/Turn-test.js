const chai = require('chai')
const Turn = require('../src/Turn')
const Card = require('../src/Card')
const expect = chai.expect;

//card example



describe('Turn', function() {
    let id = 1
    let question = 'What allows you to define a set of related information using key-value pairs?'
    let answers = ['object', 'array', 'function']
    let correctAnswer = 'object'
    let cardInfo = {id,question,answers,correctAnswer}
    let card = new Card(cardInfo)
    let answer = 'object'
    beforeEach(() => {
    turn = new Turn(answer,card)
})
it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceOf(Turn)
}) 
it('Should return answer given', function() {
    expect(turn.returnGuess()).to.equal(answer)
})
it('Should return the Card', function() {
    expect(turn.returnCard()).to.equal(card)
})
it('Should return if the answer is true or false', function() {
    expect(turn.evaluateGuess()).to.equal(true)
    const turn2 = new Turn('array', card)
    expect(turn2.evaluateGuess()).to.equal(false)
})
it('Should return a correct or incorrect statement', function() {
    expect(turn.giveFeedback()).to.equal('correct!')
    const turn2 = new Turn('array', card)
    expect(turn2.giveFeedback()).to.equal('incorrect!')
})
})