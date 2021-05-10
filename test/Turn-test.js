const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  }); 

// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.

it('should store a guess', function() {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);

  expect(turn.guess).to.equal('pug');
});  

// returnGuess: method that returns the guess

it('should store a card', function() {
  const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn('pug', card);

  expect(turn.currentCard).to.equal(card);
});  

// returnCard: method that returns the Card


// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card


// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.










});