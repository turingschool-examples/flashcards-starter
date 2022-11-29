const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn')

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should be able to take a users guess and a card object for the current card in play as arguments', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.usersAnswer).to.equal('pug');
    expect(turn.currentCard).to.equal(card);
  });

  it('should return guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.returnGuess();

    expect(turn.usersAnswer).to.equal('pug');
  });

  it('should return card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.returnCard();
    
    expect(turn.currentCard).to.equal(card);
  });

  it('should evaluate users guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should give feedback', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect!')
  })


})