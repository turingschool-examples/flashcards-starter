const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });
  it('should instantiate with a users guess to the question', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should also instantiate with a Card object for the current card in play', function() {

    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')

    const turn = new Turn('pug', card);

    expect(turn.cardInPlay).to.equal(card);
  });

});
