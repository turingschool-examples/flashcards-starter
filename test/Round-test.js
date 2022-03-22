const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', function() {
	it('should work!', function() {
		expect(true).to.equal(true)
	})

	it('should be able to return the current card being played', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
		const cards = [card1, card2, card3]
		const deck = new Deck(cards)
		const round = new Round(deck.cards)
		expect(round.returnCurrentCard()).to.equal(card1)
	})

	it('should be able to keep track of number of turns', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
		const cards = [card1, card2, card3]
		const deck = new Deck(cards)
		const round = new Round(deck.cards)
		expect(round.turnCount).to.equal(0)
		round.takeTurn()
		round.takeTurn()
		round.takeTurn()
		expect(round.turnCount).to.equal(3)
	})

	it('should be able to evaluate guesses', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

		const cards = [card1, card2, card3]
		const deck = new Deck(cards)
		const round = new Round(deck.cards)
		expect(round.takeTurn('object')).to.equal(true)
		expect(round.takeTurn('array')).to.equal(true)
	})

})