const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn1, turn2, turn3, card;
  beforeEach(function () {
    card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    turn1 = new Turn('pug', card);
    turn2 = new Turn('capybara', card);
    turn3 = new Turn('sea otter', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should store a user\s guess', function() {
    expect(turn1.guess).to.equal('pug');
  });

  it('should store the current card', function() {
    expect(turn1.card).to.equal(card);
  });

  it('should be able to return the user\s guess', function() {
    expect(turn1.returnGuess()).to.equal('pug');
  });

  it('should be able to return the current card', function() {
    expect(turn1.returnCard()).to.equal(card);
  });

  it('should have a function that return true when the guess is right', function() {
    expect(turn3.evaluateGuess()).to.equal(true);
  });

  it('should also return false when the guess is wrong', function() {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(true);
  });

  it('should have a function that return \'correct!\') when the guess is right', function() {
    expect(turn1.giveFeedBack()).to.equal('correct!');
  });

  it('should have a function that return \'incorrect!\') when the guess is wrong', function() {
    expect(turn1.giveFeedBack()).to.equal('incorrect!');
    expect(turn2.giveFeedBack()).to.equal('incorrect!');
    expect(turn3.giveFeedBack()).to.equal('correct!');
  });
});
