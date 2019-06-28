const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let card, turn; 

describe('Turn', function() {

	beforeEach(function() {
		card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
		turn = new Turn('object', card);
	});

	it('should be a function', function(){
		expect(Turn).to.be.a('function');
	});

	it('should be an instance of Turn', function() {
		expect(turn).to.be.an.instanceOf(Turn);
	});

	it('should store a guess', function () {
		expect(turn.guess).to.equal('object');
	});

	it('should store a card', function() {
		expect(turn.card).to.deep.equal(card);
	});

	it('should return a guess', function() {
		expect(turn.returnGuess()).to.deep.equal(turn.guess);
	});

	it('should return a card', function() {
		expect(turn.returnCard()).to.deep.equal(card);
	});

	it('should evaluate guess', function() {
		expect(turn.evaluateGuess()).to.equal(true) 
	});

	it('should give feedback', function() {
		turn.evaluateGuess();
		expect(turn.giveFeedback()).to.equal('correct!');
	});

});

