const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');

  });

  it('should return the users guess', function() {
  	const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  	const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return the users card', function() {
  	const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  	const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.deep.equal(card)
  });

}); // end of test