const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });  

  it('should store a card', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.card).to.equal(card);
  });
  it('should return a guess', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug');
  });
  it('should return the card', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.equal(turn.card);
  });
  it('should return evaluate the guess and return a boolean', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });
  it('should return give feedback of correct or incorrect', function() {
    const card = new Card (1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);
    expect(turn1.giveFeedback()).to.equal(`incorrect!`);
    expect(turn2.giveFeedback()).to.equal(`correct!`);
  });           




});