const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function () {
  let turn

  beforeEach(function () {
    turn1 = new Turn("This guess", 1)
    turn2 = new Turn("Another guess", 2)
    turn3 = new Turn("Chocolate", 3)
    turn4 = new Turn("Strawberry", 4)
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
    expect(turn2.currentCard).to.equal(2)
  })

  it('should return a boolean', function () {
    turn2.evaluateGuess()
    expect(turn2.evaluateGuess()).to.be.a('boolean')
  })

  it('should return true if the guess is correct', function () {
    expect(turn3.evaluateGuess("Chocolate")).to.equal(true)
  })

  it('should return false if the guess is incorrect', function () {
    expect(turn3.evaluateGuess("Vanilla")).to.equal(false)
  })

  it('should return \'correct!\' if the guess is correct', function () {
    turn4.evaluateGuess("Strawberry")
    expect(turn4.giveFeedback()).to.equal('correct!')
  })

  it('should return \'incorrect!\' if the guess is incorrect', function () {
    turn4.evaluateGuess("Raspberry")
    expect(turn4.giveFeedback()).to.equal('incorrect!')
  })

})