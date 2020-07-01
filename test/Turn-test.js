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

  it('should be instantiated with a user\'s guess and a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  });

  it('should be a function that returns the player\'s guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal('pug');
    expect(turn.returnGuess).to.be.a('function');
  });
});
