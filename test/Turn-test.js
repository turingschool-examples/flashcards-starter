const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {

	it('should return true', function() {
		expect(true).to.equal(true);
	});

	it('should take a user\'s guess', function() {
		const turn = new Turn('object')
		expect(turn.guess).to.equal('object')
	})

	it('should be able to take an instantiation of the Card class', function() {
		const card = new Card(1, 'How many different primitive data-types are there?', [1, 4, 7, 6], 7)
		const turn = new Turn(4, card)
		expect(turn.card).to.equal(card)
	})

	it('should be able to make a guess', function() {
		const card = new Card(1, 'How many different primitive data-types are there?', [1, 4, 7, 6], 7);
		const turn = new Turn(3, card);
		expect(turn.returnGuess()).to.equal(3)
	})

	it('should be able to return a card', function() {
		const card = new Card(1, 'How many different primitive data-types are there?', [1, 4, 7, 6], 7);
		const turn = new Turn(3, card);
		expect(turn.returnCard()).to.equal(card)
	})

	it('should be able to evaluate a guess', function() {
		const card = new Card(1, 'How many different primitive data-types are there?', [1, 4, 7, 6], 7);
		const turn = new Turn(3, card);
		expect(turn.evaluateGuess()).to.equal(false)
	})

	it('should be able give feedback', function() {
		const card = new Card(1, 'How many different primitive data-types are there?', [1, 4, 7, 6], 7);
		const turn = new Turn(3, card);
		expect(turn.giveFeedback()).to.equal('incorrect!')
	})

});