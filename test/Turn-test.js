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

  it('should have the player guess', function(){
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should return the player guess', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return the card', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    turn.returnCard();
    expect(turn.returnCard()).to.be.a('object');
  });

  it('should evaluate the guess', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback on the guess', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});

