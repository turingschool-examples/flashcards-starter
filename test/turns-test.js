const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');




describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of a player Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the player guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('pug');
  })

  it('should return the player card', function() {
    const card = new Card(2, 'What is Trond\'s favorite animal', ['otter', 'german shepard', 'capybara'], 'german shepard');
    const turn = new Turn('pug', card);

    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal(card);
  })

  it('should evaluate if the player guess matches the correct answer', function() {
    const card = new Card(3, 'What is James\'s favorite animal', ['Turkey', 'german shepard', 'capybara'], 'turkey');
    const turn = new Turn('pug', card);

    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should give feedback after guess that returns correct or incorrect on true or false', function() {
    const card = new Card(4, 'What is Johns\'s favorite animal', ['Turkey', 'german shepard', 'capybara'], 'capybara');
    const turn = new Turn('pug', card);

    expect(turn.giveFeedBack()).to.equal('Incorrect');
  })
});
