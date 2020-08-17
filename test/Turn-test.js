const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\s guess', function() {
    const turn = new Turn('pug', 'What is Robbie\s favorite animal');
    expect(turn.guess).to.equal('pug');
  });

  it('should store the current card', function() {
    let card = new Card(1,2,3,4);
    const turn = new Turn('pug', card);
    expect(turn.card).to.equal(card);
  });

  it('should be able to return the user\s guess', function() {
    const turn = new Turn('pug', new Card(1,2,3,4));
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to return the current card', function() {
    let card = new Card(1,2,3,4);
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a function that return true when the guess is right', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn = new Turn('sea otter', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should also return false when the guess is wrong', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('capybara', card);
    const turn3 = new Turn('sea otter', card);

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(true);
  });

  it('should have a function that return \'correct!\') when the guess is right', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn = new Turn('sea otter', card);

    expect(turn.giveFeedBack()).to.equal('correct!');
  });

  it('should have a function that return \'incorrect!\') when the guess is wrong', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('capybara', card);
    const turn3 = new Turn('sea otter', card);

    expect(turn1.giveFeedBack()).to.equal('incorrect!');
    expect(turn2.giveFeedBack()).to.equal('incorrect!');
    expect(turn3.giveFeedBack()).to.equal('correct!');
  });
});
