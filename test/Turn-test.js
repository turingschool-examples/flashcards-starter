const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should have a guess as an argument', function() {
      const card = new Card(1, 'what author invented the detective story?', ['Dickens', 'Doyle', 'Gaboriau'], 'Poe');
      const turn = new Turn('guess', currentCard);

      expect(turn).to.have.property('guess');
    });










// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
