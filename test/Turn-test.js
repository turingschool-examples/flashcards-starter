const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/turn')
const Card = require('../src/Card')

describe('Turn', function() {
  let card = new Card()
  let turn = new Turn()

  beforeEach(() => {
    card = new Card(1, 'What is the name of Beths dog?', ['Doug', 'Fido', 'Buddy', 'Jimmy'], 'Jimmy')
    turn = new Turn('Jimmy', card)
    turn2 = new Turn('wrong answer', card)

  })

 it('should be a function', function() {
   expect(Turn).to.be.a('function')
 })

 it('should be an instance of Turn', function() {
  expect(turn).to.be.an.instanceof(Turn)
})

 it('should store a guess to the question', function () {
  expect(turn.guess).to.equal('Jimmy')
})

 it('should store the current card in play', function (){
   expect(turn.currentCard).to.equal(card)
 })

 it('should return the users guess', function(){
   expect(turn.returnGuess()).to.equal('Jimmy')
 })

 it('should return the card', function(){
   expect(turn.returnCard()).to.equal(card)
 })

 it('should tell you if the answer is correct', function() {
    expect(turn.evaluateGuess()).to.equal(true)
    expect(turn2.evaluateGuess()).to.equal(false)
 })
 it('should give feedback of answer', function(){
   expect(turn.giveFeedback()).to.equal('Correct!')
   expect(turn2.giveFeedback()).to.equal('Incorrect!')
 })
})
