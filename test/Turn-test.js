const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
    let turn
    let card
    let guess

    beforeEach('setup', () => {
      turn = new Turn(guess, card)
      card = new Card()
    })

    it('should be a function', () => {
      expect(Turn).to.be.a('function')
    })

    it('should be an instance of Turn', () => {
      expect(turn).to.be.an.instanceOf(Turn)
    })

    it('should store a user\'s guess and card', () => {
      card = new Card(1, 'What is Robbie\'s favorite animal',['sea otter', 'pug', 'capybara'], 'sea otter')
      turn = new Turn('sea otter', card)

      expect(turn.guess).to.equal('sea otter')
      expect(turn.card).to.deep.equal({
        'id': 1,
        'question': 'What is Robbie\'s favorite animal',
        'answers': ['sea otter', 'pug', 'capybara'],
        'correctAnswer': 'sea otter'
      })
    })

    it

})