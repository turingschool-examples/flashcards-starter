const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
describe('Turn', function() {

  it('should be a function', () => {
    let turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be able to take in a user guess', () => {
    let turn = new Turn('user guess');
    expect(turn.guess).to.equal('user guess');
  });

  it('should know what card is currently in play', () => {
    let currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('pug', currentCard);
    expect(turn.cardInPlay).to.equal(currentCard);
  });

  it('it should return the users guess', () => {
    let currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('pug', currentCard);
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('it should return the card in play', () => {
    let currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('pug', currentCard);
    expect(turn.returnCard()).to.equal(currentCard);
  });

  it('it should evaluate the user\'s guess', () => {
    let currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('sea otter', currentCard);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('it should evaluate the user\'s guess', () => {
    let currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('sea otter', currentCard);
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

});
