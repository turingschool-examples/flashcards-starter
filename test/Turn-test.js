const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', function () {
  let card1, card2, turn1, turn2, turn3, turn4
  // do i need 4 turns if i only have 2 cards?
  beforeEach(function () {
    card1 = new Card(1, 'This is your question', ['right', 'wrong', 'also wrong'], 'right')
    card2 = new Card(2, 'This is another question', ['bad', 'good', 'worse'], 'good')
    turn1 = new Turn("This guess", card1)
    turn2 = new Turn("Another guess", card1)
    turn3 = new Turn("good", card2)
    turn4 = new Turn('right', card2)
  })

  it.skip('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function () {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it.skip('should return the player\'s guess', function () {
    turn1.returnGuess()
    expect(turn1.guess).to.equal("This guess")
  });

  it.skip('should return the current card', function () {
    turn2.returnCard()
    expect(turn2.currentCard).to.equal(card1)
  })

  it.skip('should return a boolean', function () {
    turn2.evaluateGuess()
    expect(turn2.evaluateGuess()).to.be.a('boolean')
  })

  it.skip('should return true if the guess is correct', function () {
    expect(turn3.evaluateGuess('good')).to.equal(true)
  })

  it.skip('should return false if the guess is incorrect', function () {
    expect(turn3.evaluateGuess('not good')).to.equal(false)
  })

  it.skip('should return \'correct!\' if the guess is correct', function () {
    turn4.evaluateGuess('right')
    expect(turn4.giveFeedback()).to.equal('correct!')
  })

  it.skip('should return \'incorrect!\' if the guess is incorrect', function () {
    turn4.evaluateGuess('not right')
    expect(turn4.giveFeedback()).to.equal('incorrect!')
  })

})