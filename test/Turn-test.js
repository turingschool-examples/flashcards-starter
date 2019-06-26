const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Turn', function() {

	it('should be a function', function() {
    	const turn = new Turn();

    	expect(Turn).to.be.a('function');
 	});

  	it('should be an instance of Card', function() {
    	const turn = new Turn();

    	expect(turn).to.be.an.instanceof(Turn);
  	});

  	it('should be instantiated with two arguments', function() {
  		const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    	const turn = new Turn('pug', card);

    	expect(turn.userGuess).to.equal('pug');
    	expect(turn.currentCard).to.equal(card);
  	}); 

  	it('should have a method that returns the guess', function() {
  		const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    	const turn = new Turn('pug', card);

    	expect(turn.returnGuess()).to.equal('pug');
  	}); 

  	it('should have a method that returns the card', function() {
  		const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    	const turn = new Turn('pug', card);

    	expect(turn.returnCard()).to.equal(card);
  	}); 

  	it('should have a method that that evaluate the guess', function() {
  		const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    	const turn = new Turn('pug', card);

    	expect(turn.evaluateGuess()).to.equal(false);
  	}); 

  	it('should return Correct! if the answer is correct', function() {
  		const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    	const turn = new Turn('sea otter', card);
    	expect(turn.giveFeedback()).to.equal('Correct!');
  	}); 

  	it('should return Incorrect! if the answer is incorrect', function() {
  		const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    	const turn = new Turn('pug', card);

    	expect(turn.giveFeedback()).to.equal('Incorrect!');

  	}); 

});