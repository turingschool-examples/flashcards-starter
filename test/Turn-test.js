const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn
  beforeEach(() => {
     card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
     turn = new Turn('potato', card)
  })
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should be able to store a player\'s guess', function() {
    const guess = 'potato';
    const turn = new Turn(guess)
    expect(turn.guess).to.equal('potato');
  });

  it('should be able to store a card object in play', function() {
    
    expect(turn.card).to.equal(card)
  });

  it('should be able to return the guess', () => {
   
    expect(turn.returnGuess()).to.equal('potato')
  })

  it('should be able to return the card', () => {
    
    expect(turn.returnCard()).to.equal(card)
  });

  it('should be able to tell if the user guess matches the correct answer on the card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should tell you if your guess is correct or incorrect', () => {
    
    expect(turn.giveFeedback()).to.equal('incorrect')
  });

 

})

