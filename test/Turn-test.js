const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function () {

  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the player\'s guess', function () {
    const turn = new Turn("This guess", 1)
    turn.returnGuess()
    expect(turn.guess).to.equal("This guess")
  });

  it('should return the current card', function () {
    const turn = new Turn("Another guess", 2)
    turn.returnCard()
    expect(turn.currentCard).to.equal(2)
  })

  it('should return a boolean', function () {
    const turn = new Turn("Another guess", 2)
    turn.evaluateGuess()
    expect(turn.evaluateGuess()).to.be.a('boolean')
  })

  it('should return true if the guess is correct', function () {
    const turn = new Turn("Chocolate", 3)
    expect(turn.evaluateGuess("Chocolate")).to.equal(true)
  })

  it('should return false if the guess is incorrect', function () {
    const turn = new Turn("Chocolate", 3)
    expect(turn.evaluateGuess("Vanilla")).to.equal(false)
  })

  it('should return \'correct!\' if the guess is correct', function () {
    const turn = new Turn("Strawberry", 4)
    turn.evaluateGuess("Strawberry")
    expect(turn.giveFeedback()).to.equal('correct!')
  })

  it('should return \'incorrect!\' if the guess is incorrect', function () {
    const turn = new Turn("Strawberry", 4)
    turn.evaluateGuess("Raspberry")
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })


})