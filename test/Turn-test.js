const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should contain a guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug', card);
  });

  it('should have a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.currentCard).to.equal(card)
  });

  it('should return a guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.returnGuess();
    // assert.equal(turn.returnGuess(), turn.guess)
    expect(turn.returnGuess()).to.equal(turn.guess)
  })

  it('should return a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    turn.returnCard();
    expect(turn.returnCard()).to.equal(turn.currentCard)
  })

  it('should indicate if guess was correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    turn.evaluateGuess();
    turn2.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  })

  it('should give feedback regarding guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    turn.evaluateGuess();
    turn2.evaluateGuess();

    turn.giveFeedback();
    turn2.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  })

});
