const expect = require('chai').expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js')

describe('Turn', function() {

  let card;
  let turn;
  beforeEach(function() {
    card = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter")
    turn = new Turn('Pug', card)
  })

  it('should be a function', function() {
    let turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should take in a guess', function() {
    expect(turn.guess).to.equal('Pug')
  })

  it('should instantiate a new card for the current card', function() {
    expect(turn.card).to.equal(card)
  })

  it('should return the users guess', function() {
    turn.returnGuess()
    expect(turn.returnGuess()).to.equal('Pug')
  })

  

})
