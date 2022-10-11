const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })
  it('should be an instance of Turn', () => {
    const turn = new Turn()
    expect(turn).to.be.an.instanceOf(Turn)
  })
  it('should store a guess', () => {
    const card = new Card(1, 'What is the capital of Texas?', ['Austin', 'Houston', 'Dallas'], 'Austin')
    const turn = new Turn('Dallas', card)
    expect(turn.guess).to.be.a('string')
    expect(turn.guess).to.equal('Dallas')
  })
  it('should store a card', () => {
    const card = new Card(1, 'What is the capital of Texas?', ['Austin', 'Houston', 'Dallas'], 'Austin')
    const turn = new Turn('Austin', card)
    expect(turn.card).to.be.an('object')
    expect(turn.card).to.deep.equal({
      id: 1,
      question: 'What is the capital of Texas?',
      answers: [ 'Austin', 'Houston', 'Dallas' ],
      correctAnswer: 'Austin'
    })
  })
  it('should be able to return the guess with the method returnGuess()', () => {
    const card = new Card(1, 'What is the capital of Louisiana?', ['New Orleans', 'Lafayette', 'Lake Charles'], 'New Orleans')
    const turn = new Turn('New Orleans', card)
    expect(turn.returnGuess()).to.equal('New Orleans')
  })
  it('should be able to return the card object with the method returnCard()', () => {
    const card = new Card(1, 'What is the capital of Colorado?', ['Boulder', 'Denver', 'Aspen'], 'Denver')
    const turn = new Turn('Denver ', card)
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: 'What is the capital of Colorado?',
      answers: [ 'Boulder', 'Denver', 'Aspen' ],
      correctAnswer: 'Denver'
    })
  })
  it('should return true boolean if guess is correct with the method evaluateGuess()', () => {
    const card1 = new Card(1, 'What is the capital of California?', ['Sacramento', 'Los Angeles', 'San Diego'], 'Sacramento')
    const card2 = new Card(2, 'What is the capital of Washington?', ['Seattle', 'Olympia', 'Bellevue'], 'Olympia')
    const turn1 = new Turn('Sacramento', card1)
    const turn2 = new Turn('Olympia', card2)
    expect(turn1.evaluateGuess()).to.be.a('boolean')
    expect(turn1.evaluateGuess()).to.equal(true)
    expect(turn2.evaluateGuess()).to.be.a('boolean')
    expect(turn2.evaluateGuess()).to.equal(true)
  })
  it('should return false boolean if guess is incorrect with the method evaluateGuess()', () => {
    const card1 = new Card(1, 'What is the capital of Florida?', ['Orlando', 'Miami', 'Tallahassee'], 'Tallahassee')
    const card2 = new Card(2, 'What is the capital of Georgia?', ['Atlanta', 'Savannah', 'Augusta'], 'Atlanta')
    const turn1 = new Turn('Miami', card1)
    const turn2 = new Turn('Augusta', card2)
    expect(turn1.evaluateGuess()).to.be.a('boolean')
    expect(turn1.evaluateGuess()).to.equal(false)
    expect(turn2.evaluateGuess()).to.be.a('boolean')
    expect(turn2.evaluateGuess()).to.equal(false)
  })
  it('should return "Correct!" if the guess is correct with the method giveFeedback()', () => {
    const card1 = new Card(1, 'What is the capital of Oklahoma?', ['Tulsa', 'Oklahoma City', 'Norman'], 'Oklahoma City')
    const card2 = new Card(2, 'What is the capital of Maryland?', ['Annapolis', 'Baltimore', 'Beltsville'], 'Annapolis')
    const turn1 = new Turn('Oklahoma City', card1)
    const turn2 = new Turn('Annapolis', card2)
    expect(turn1.giveFeedback()).to.be.a('string')
    expect(turn1.giveFeedback()).to.equal('Correct!')
    expect(turn2.giveFeedback()).to.be.a('string')
    expect(turn2.giveFeedback()).to.equal('Correct!')
  })
  it('should return "Incorrect!" if the guess is incorrect with the method giveFeedback()', () => {
    const card1 = new Card(1, 'What is the capital of Tennessee?', ['Chattanooga', 'Memphis', 'Nashville'], 'Nashville')
    const card2 = new Card(2, 'What is the capital of Alabama?', ['Montgomery', 'Birmingham', 'Mobile'], 'Montgomery')
    const turn1 = new Turn('Memphis', card1)
    const turn2 = new Turn('Mobile', card2)
    expect(turn1.giveFeedback()).to.be.a('string')
    expect(turn1.giveFeedback()).to.equal('Incorrect!')
    expect(turn2.giveFeedback()).to.be.a('string')
    expect(turn2.giveFeedback()).to.equal('Incorrect!')
  })
})