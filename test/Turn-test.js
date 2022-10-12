const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', () => {

  let card1
  let card2

  beforeEach(() => {
    card1 = new Card(1, 'What is the capital of Texas?', ['Austin', 'Houston', 'Dallas'], 'Austin')
    card2 = new Card(2, 'What is the capital of Maryland?', ['Annapolis', 'Baltimore', 'Beltsville'], 'Annapolis')
  })

  it('should be a function', () => {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', () => {
    const turn = new Turn()
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should store a guess', () => {
    const turn = new Turn('Dallas', card1)
    expect(turn.guess).to.be.a('string')
    expect(turn.guess).to.equal('Dallas')
  })
  
  it('should store a card', () => {
    const turn = new Turn('Austin', card1)
    expect(turn.card).to.be.an('object')
    expect(turn.card).to.deep.equal({
      id: 1,
      question: 'What is the capital of Texas?',
      answers: [ 'Austin', 'Houston', 'Dallas' ],
      correctAnswer: 'Austin'
    })
  })

  it('should be able to return the guess with the method returnGuess()', () => {
    const turn = new Turn('Annapolis', card2)
    expect(turn.returnGuess()).to.equal('Annapolis')
  })

  it('should be able to return the card object with the method returnCard()', () => {
    const turn = new Turn('Annapolis', card2)
    expect(turn.returnCard()).to.deep.equal({
      id: 2,
      question: 'What is the capital of Maryland?',
      answers: [ 'Annapolis', 'Baltimore', 'Beltsville' ],
      correctAnswer: 'Annapolis'
    })
  })

  it('should return true boolean if guess is correct with the method evaluateGuess()', () => {
    const turn1 = new Turn('Austin', card1)
    const turn2 = new Turn('Annapolis', card2)
    expect(turn1.evaluateGuess()).to.be.a('boolean')
    expect(turn1.evaluateGuess()).to.equal(true)
    expect(turn2.evaluateGuess()).to.be.a('boolean')
    expect(turn2.evaluateGuess()).to.equal(true)
  })

  it('should return false boolean if guess is incorrect with the method evaluateGuess()', () => {
    const turn1 = new Turn('Houston', card1)
    const turn2 = new Turn('Beltsville', card2)
    expect(turn1.evaluateGuess()).to.be.a('boolean')
    expect(turn1.evaluateGuess()).to.equal(false)
    expect(turn2.evaluateGuess()).to.be.a('boolean')
    expect(turn2.evaluateGuess()).to.equal(false)
  })

  it('should return "Correct!" if the guess is correct with the method giveFeedback()', () => {
    const turn1 = new Turn('Austin', card1)
    const turn2 = new Turn('Annapolis', card2)
    expect(turn1.giveFeedback()).to.be.a('string')
    expect(turn1.giveFeedback()).to.equal('Correct!')
    expect(turn2.giveFeedback()).to.be.a('string')
    expect(turn2.giveFeedback()).to.equal('Correct!')
  })

  it('should return "Incorrect!" if the guess is incorrect with the method giveFeedback()', () => {
    const turn1 = new Turn('Dallas', card1)
    const turn2 = new Turn('Baltimore', card2)
    expect(turn1.giveFeedback()).to.be.a('string')
    expect(turn1.giveFeedback()).to.equal('Incorrect!')
    expect(turn2.giveFeedback()).to.be.a('string')
    expect(turn2.giveFeedback()).to.equal('Incorrect!')
  })
})