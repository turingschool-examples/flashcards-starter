const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
describe('Turn', function() {
  beforeEach(function() {
  currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  turn = new Turn('pug', currentCard);
});

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be able to take in a user guess', () => {
    expect(turn.guess).to.equal('pug');
  });

  it('should know what card is currently in play', () => {
    expect(turn.cardInPlay).to.equal(currentCard);
  });

  it('it should return the users guess', () => {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('it should return the card in play', () => {
    expect(turn.returnCard()).to.equal(currentCard);
  });

  it('it should evaluate the user\'s guess', () => {
    expect(turn.evaluateGuess(currentCard)).to.equal(false);
  });

  it('it should give feedback on the user\'s guess', () => {
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });

});
