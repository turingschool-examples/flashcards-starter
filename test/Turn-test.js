const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;
  let card;
  let guess;

  it.skip('should accept a string argument representing a users guess', () => {
    guess = 'guess'
    turn = new Turn(guess)

    expect(turn.guess).to.equal(guess)
  })
  
  it.skip('should accept the currently played card as an argument', () => {
    guess = 'guess'
    card = new Card(1, "This is a test question", ["Yes", "No"], "Yes")
    turn = new Turn(guess, card)

    expect(turn.card).to.equal(card)
  })
})