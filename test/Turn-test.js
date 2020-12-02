const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function () {
  let card, turn

  beforeEach(function () {
    card1 = new Card(1, 'This is your question', ['right', 'wrong', 'also wrong'], 'right')
    card2 = new Card(2, 'This is another question', ['bad', 'good', 'worse'], 'good')
    turn1 = new Turn("This guess", card1)
    turn2 = new Turn("Another guess", card1)
    turn3 = new Turn("good", card2)
    turn4 = new Turn('right', card2)
  })

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should return the player\'s guess', function () {
    turn1.returnGuess()
    expect(turn1.guess).to.equal("This guess")
  });

  it('should return the current card', function () {
    turn2.returnCard()
    expect(turn2.currentCard).to.equal(card1)
  })

  it('should return a boolean', function () {
    turn2.evaluateGuess()
    expect(turn2.evaluateGuess()).to.be.a('boolean')
  })

  it('should return true if the guess is correct', function () {
    expect(turn3.evaluateGuess('good')).to.equal(true)
  })

  it('should return false if the guess is incorrect', function () {
    expect(turn3.evaluateGuess('not good')).to.equal(false)
  })

  it('should return \'correct!\' if the guess is correct', function () {
    turn4.evaluateGuess('right')
    expect(turn4.giveFeedback()).to.equal('correct!')
  })

  it('should return \'incorrect!\' if the guess is incorrect', function () {
    turn4.evaluateGuess('not right')
    expect(turn4.giveFeedback()).to.equal('incorrect!')
  })

})