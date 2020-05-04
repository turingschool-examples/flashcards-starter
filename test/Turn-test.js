const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
  let turn1;
  let turn2
  let card;

  beforeEach(() => {
    turn1 = new Turn('pug', card)
    turn2 = new Turn('sea otter', card)
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  }) 

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceOf(Turn)
  }) 

  it('should have a users guess and a card', () => {
    expect(turn1.guess).to.equal('pug')
    expect(turn1.card).to.deep.equal({
      id: 1, 
      question: 'What is Robbie\'s favorite animal', 
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    })
  }) 

  it('should be able to return the guess', () => {
    expect(turn1.returnGuess()).to.equal('pug')
  }) 

  it('should be able to return the card', () => {
    expect(turn1.returnCard()).to.deep.equal({
      id: 1, 
      question: 'What is Robbie\'s favorite animal', 
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    })
  }) 

  it('should be able to evaluate the guess', () => {
    expect(turn1.evaluateGuess()).to.equal(false)
    expect(turn2.evaluateGuess()).to.equal(true)
  })

  it('should be able to give feedback on the guess', () => {
    expect(turn1.giveFeedback()).to.equal('Sorry, bud.  Better luck next time.')
    expect(turn2.giveFeedback()).to.equal('You got it right...lucky guess')
  })

})