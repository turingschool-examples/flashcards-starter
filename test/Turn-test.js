const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
    let guess
    let turn
    let card

    beforeEach('setup', () => {
      guess = 'sea otter'
      turn = new Turn(guess, card)
      card = new Card(1, 'What is Robbie\'s favorite animal',['sea otter', 'pug', 'capybara'], 'sea otter')
    })

    it('should be a function', () => {
      expect(Turn).to.be.a('function')
    })

    it('should be an instance of Turn', () => {
      expect(turn).to.be.an.instanceOf(Turn)
    })

    it('should store a user\'s guess and card', () => {  
      expect(turn.guess).to.equal('sea otter')
      expect(turn.card).to.deep.equal({
        'id': 1,
        'question': 'What is Robbie\'s favorite animal',
        'answers': ['sea otter', 'pug', 'capybara'],
        'correctAnswer': 'sea otter'
      })
    })

    it('should have a method that returns the guess', () => {
      expect(turn.returnGuess()).to.equal('sea otter')
    })

    it('should have a method that returns the card', () => {
      expect(turn.returnCard()).to.equal(turn.card)
    })

    it('should return true if the user\'s guess is correct', () => {
      expect(turn.evaluateGuess()).to.equal(true)
    }) 

    it('should return false if the user\'s guess is incorrect', () => {
      turn = new Turn('pug', card)

      expect(turn.evaluateGuess()).to.equal(false)
    }) 

    it('should return correct if the user\'s guess was correct', () => {
      turn = new Turn(guess, card)

      expect(turn.giveFeedback()).to.equal('correct!')
    })

    it('should return incorrect if the user\'s guess was incorrect', () => {
      turn = new Turn('pug', card)

      expect(turn.giveFeedback()).to.equal('incorrect..')
    })

})