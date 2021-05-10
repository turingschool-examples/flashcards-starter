const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess', () => {
    const turn = new Turn('sea otter');
    expect(turn.guess).to.equal('sea otter');
  });  

  it('should store the current Card in play', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.card).to.equal(card);
  });  

  it('returnGuess should be a method that returns the user\'s guess', () => {
    const turn = new Turn('sea otter');
    expect(turn.returnGuess()).to.equal('sea otter');
  });  

  it.skip('returnCard should be a method that returns the current card', () => {
    
    
  });  

  it.skip('evaluateGuess should be a method that returns true if the user\'s guess matches the correct answer', () => {
    
    
  });  


  it.skip('giveFeedback should be a method that returns a string', () => {
    
    
  });  

  // Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
  // returnGuess: method that returns the guess
  // returnCard: method that returns the Card
  // evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
  // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
  
});