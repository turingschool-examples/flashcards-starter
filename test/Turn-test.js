const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

	it('should be a function', function() {
		const turn = new Turn();
		expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
		const turn = new Turn();
		expect(turn).to.be.an.instanceof(Turn);
  });

	it('should take an argument that represents the players guess', function() {
		const turn = new Turn('works');
		expect(turn.guess).to.equal('works')
	});

	it('should take a card as an argument', function() {
		const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		const turn = new Turn('object', card1);
		expect(turn.card).to.equal(card1);
	});

	it('should return the players guess', function() {
		const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		const turn = new Turn('object', card1);

		expect(turn.returnGuess()).to.equal('object');
	});

	it('should return the card', function() {
		const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		const turn = new Turn('object', card1);
		
		expect(turn.returnCard(card1)).to.equal(card1);
	});

	it('should evaluate if guess matches the correct answer', function() {
		const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		const turn = new Turn('object', card1);

		expect(turn.evaluateGuess()).to.equal(true);
	});

	it('should return a message of correct or not based on evaluated guess', function() {
		const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		const turn = new Turn('object', card1);

		expect(turn.evaluateGuess()).to.equal(true);
		expect(turn.giveFeedback()).to.equal('Correct!')
	});

});