// file dependencies 
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn Tests', () => {
  let card
  let turn
  beforeEach( () => {
    card = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    turn = new Turn('object', card);
  })

  it('1. should instantiate Turn as a class', () => {
    expect(turn).to.be.an.instanceof(Turn)
  });

  it('2. should have a method called \'returnGuess\'', () => {
    expect(turn.returnGuess).to.be.a('function')
  })

  it('3. returnGuess should return a guess string', () => {
    expect(turn.returnGuess()).to.equal(turn.guess)
  })

  it('4. should have a method called \'returnCard\'', () => {
    expect(turn.returnCard).to.be.a('function')
  })

  it('5. returnCard should return a card object', () => {
    expect(turn.returnCard()).to.equal(turn.currentCard)
  })

  it('6. should have a method called \'evaluateGuess\'', () => {
    expect(turn.evaluateGuess).to.be.a('function')
  })

  it('7. evaluateGuess should return true if the user\'s guess matches the card\'s answer', () => {
    expect(turn.guess).to.equal(card.correctAnswer)
    expect(turn.evaluateGuess()).to.be.true
  })

  it('8. evaluateGuess should return false if it does not match', () => {
    const turn2 = new Turn('wrong answer', card)
    expect(turn2.evaluateGuess()).to.be.false
  })

  it('9. should have a method called \'giveFeedback\'', () => {
    expect(turn.giveFeedback).to.be.a('function')
  })

  it('10. giveFeedback should return \'correct\' if a guess is correct', () => {
    expect(turn.giveFeedback()).to.equal('correct!')
  })

  it('11. giveFeedback should return \'incorrect\' if a guess is incorrect', () => {
    const turn2 = new Turn('wrong answer', card)
    expect(turn2.giveFeedback()).to.equal('incorrect!')
  })

})