const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return the card', function() {
    const card = new Card(2, 'What is Tristan\'s favorite animal', ['platypus', 'slug', 'shark'], 'shark');
    const turn = new Turn('shark', card);

    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should return true if the guess is correct and false if not', function() {
    const card = new Card(3, 'What is Liz\'s favorite animal', ['cat', 'dolphin', 'sloth'], 'sloth');
    const turn = new Turn('sloth', card);

    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it("should return 'correct!' if the guess is correct and 'incorrect!' if not", function() {
    const card = new Card(3, 'What is Austin\'s favorite animal', ['spider', 'eagle', 'elephant'], 'eagle');
    const turn = new Turn('spider', card);

    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});
