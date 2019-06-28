const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

	it('should be a function', function(){
		const turn = new Turn;
		expect(Turn).to.be.a('function');
	});

	it('should be an instance of Turn', function() {
		const turn = new Turn; 
		expect(turn).to.be.an.instanceOf(Turn);
	});

	it('should store a guess', function () {
		const turn = new Turn('Object');
		expect(turn.guess).to.equal('Object');
	});

	it('should store a card', function() {
		const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
		const turn = new Turn('Object', card);
		expect(turn.card).to.deep.equal(card);
	});

	it('should return a guess', function() {
		const turn = new Turn;
		expect(turn.returnGuess()).to.deep.equal(turn.guess);
	});

	it('should return a card', function() {
		const card = new Card({id: 1, question: 'What?', answers: [1,2,3], correctAnswer: 'Who?'});
		const turn = new Turn('object', card);
		expect(turn.returnCard()).to.deep.equal(card);
	});

	it('should evaluate guess', function() {
		const card = new Card({id: 1, question: 'Where are we?', answers: ['Hell', 'Limbo', 'Turing'], correctAnswer: 'Turing'});
		const turn = new Turn('Turing', card);
		expect(turn.evaluateGuess()).to.equal(true) 
	});

	it('should give feedback', function() {
		const card = new Card({id: 1, question: 'Where are we?', answers: ['Hell', 'Limbo', 'Turing'], correctAnswer: 'Turing'});
		const turn = new Turn('Turing', card);
		turn.evaluateGuess();
		expect(turn.giveFeedback()).to.equal('correct!');
	});

});

