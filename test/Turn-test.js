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

  it('should accept a guess', function() {
    const turn = new Turn('pug');

    expect(turn.guess).to.equal('pug');
  });

  it('should accept a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(card).to.be.an.instanceOf(Card);
    expect(card.id).to.equal(1);
    expect(turn.card.id).to.equal(1);
    expect(turn.card.correctAnswer).to.equal('sea otter');
  })

  it('should return the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const guess = 'pug';
    const turn = new Turn(guess, card);

    expect(turn.returnGuess()).to.equal('pug');
  });  

  it('should return the card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.equal(card);
  });  
  
  it('should evaluate the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const guess = 'pug';
    const guess2 = 'sea otter';
    const turn = new Turn(guess, card);
    const turn2 = new Turn(guess2, card);

    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);

  });

  it('should give feedback about the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    expect(turn.giveFeedback()).to.equal('incorrect');
    expect(turn2.giveFeedback()).to.equal('correct');
  });
});
